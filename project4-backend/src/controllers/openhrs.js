import pool from "../config/database.js"
import { v4 as uuidv4 } from 'uuid'
import OpenAI from "openai"

const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY
})
export async function GetOpenHrs(req, res) {
    console.log(req.body)
    const sessionId = req.body.sessionId
    const query = `SELECT * FROM openhrs WHERE sessionid = $1`
    const value = [sessionId]
    const getOpenhrs = await pool.query(query, value)
    if (getOpenhrs.rows.length === 0) {
        return res.status(500).json({error: 'Server error, no opening hours found'})
    }
    const rawHours = getOpenhrs.rows[0].openhrs

    const hours = JSON.stringify(rawHours)
    const hoursSummary = `Summarize this business schedule configuration:\n${hours}`

    try {
        const message = req.body.message
        const prompt = `
            You are OpenHrs, an AI that helps users get business hours for online stores.
            Here are the business hours: 
            ${hoursSummary}
            User query: 
            ${message}
            Instructions:
            - Suggest the best availability based on the business hours provided.
            - Be brief and natrual with the your responses.
            - If unsure, ask clarifying questions.
        `
        const completion = await client.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {role: 'system', content: 'You are a helpful website opening hours checker.'},
                {role: 'user', content: prompt}
            ],
            temperature: 0.4
        })
        const botReply = completion.choices[0].message.content
        return res.status(200).json({reply: botReply})
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: err})
    }
}

export async function OpenHrsConfig(req, res) {
    const {sessionId, businessConfig} = req.body
    const id = uuidv4()
    const time = new Date()

    try {
        // const validate = schemaValidator(req)
        const query = `
            INSERT INTO openhrs (id, sessionId, openhrs, time)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `
        const values = [id, sessionId, JSON.stringify(businessConfig), time]
        const sendOpenhrs = await pool.query(query, values)
        return res.status(200).json({message: 'Business hours updated, AI memory updated'})
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: 'error', error: err})
    }
}