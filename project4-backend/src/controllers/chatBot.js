import OpenAI from 'openai'
import pool from '../config/database.js'
import { v4 as uuidv4 } from 'uuid'

const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY
})
export async function ChatBot(req, res) {
    const {sessionId, message} = req.body
    const query = `SELECT * FROM chatconfigs WHERE sessionid = $1`
    const value = [sessionId]
    const getConfig = await pool.query(query, value)
    if (getConfig.rows.length === 0) {
        return res.status(500).json({error: 'no chatBot configurations found'})
    }
    const config = getConfig.rows[0]
    const {model, instructions, ...rest} = config
    try {
        if (!message) {
            return res.status(400).json({error: 'message input required'})
        }
        const req = await client.chat.completions.create({
            model: model,
            messages: [
                {
                    role: 'system',
                    content: instructions,
                },
                {
                    role: 'user',
                    content: message,
                },
            ],
        })
        const aiResponse = req.choices[0].message.content
        return res.status(200).json({reply: aiResponse})
    } catch (err) {
        console.log(err)
        return res.status(500).json({success: false, error: 'Something went wrong with the navBot service.'})
    }
}

export async function ChatConfig(req, res) {
    const {sessionId, instruction} = req.body
    if (!sessionId || !instruction) {
        return res.status(500).json({error: 'Invalid/incomplete data sent'})
    }
    const model = 'gpt-4o-mini'
    const time = new Date()
    const id = uuidv4()

    const query = `
    INSERT INTO chatconfigs (id, sessionId, model, instructions, time) 
    VALUES ($1, $2, $3, $4, $5) 
    RETURNING *`
    const values = [id, sessionId, model, instruction, time]
    const sendConfig = await pool.query(query, values)
    return res.status(200).json({message: 'instructions accepted, ChatBot configuration complete'})
}