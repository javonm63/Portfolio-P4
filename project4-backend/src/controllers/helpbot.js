import { v4 as uuidv4 } from "uuid"
import pool from "../config/database.js"
import OpenAI from 'openai'
import { schemaValidator } from "../middleware/botValidators.js"
import { normalize } from "../utils/normalize.js"


const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY
})
export async function GetHelp(req, res) {
    const sessionId = req.body.sessionId
    const query = `SELECT * FROM schemas WHERE sessionid = $1`
    const value = [sessionId]
    const getSchema = await pool.query(query, value)
    if (getSchema.rows.length === 0) {
        return res.status(500).json({error: 'Server error, no schema found'})
    }
    const rawSchema = getSchema.rows[0].schema

    const schema = normalize(rawSchema)
    const schemaSummary = schema.map(page => `+ ${page.title} - ${page.url}`).join('/n')

    try {
        const message = req.body.message
        const prompt = `
            You are NavBot, an AI that helps users navigate a website by understanding its structure.
            Here is the website schema: 
            ${schemaSummary}
            User query: 
            ${message}
            Instructions:
            - Suggest the best page or action based on the schema.
            - Be brief and natrual with the your responses.
            - If unsure, ask clarifying questions.
        `
        const completion = await client.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {role: 'system', content: 'You are a helpful website navigation assistant.'},
                {role: 'user', content: prompt}
            ],
            temperature: 0.4
        })
        const navBotReply = completion.choices[0].message.content
        return res.status(200).json({reply: navBotReply})
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: err})
    }
}

export async function HelpBotConfig(req, res) {
    const sessionId = req.body.sessionId
    const id = uuidv4()
    const time = new Date()

    try {
        const validate = schemaValidator(req)
        const query = `
            INSERT INTO schemas (id, sessionId, schema, time)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `
        const values = [id, sessionId, JSON.stringify(validate), time]
        const sendSechema = await pool.query(query, values)
        return res.status(200).json({message: 'schema accepted, AI analiyst complete'})
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: 'error', error: err})
    }
}