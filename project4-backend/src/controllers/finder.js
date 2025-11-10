import {v4 as uuidv4 } from 'uuid'
import pool from '../config/database.js'
import OpenAI from 'openai'
import { productValidator } from '../middleware/botValidators.js'

const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY
})
export async function finderBot(req, res) {
    const sessionId = req.body.sessionId
    const query = `SELECT * FROM prodcatalog WHERE sessionid = $1`
    const value = [sessionId]
    const getCatalog = await pool.query(query, value)
    if (getCatalog.rows.length === 0) {
        return res.status(500).json({error: 'Server error, no product catalog found'})
    }
    const rawCatalog = getCatalog.rows[0].catalog

    const catalog = JSON.stringify(rawCatalog)
    const catalogSummary = `make a summary of this product catalog:\n${catalog} `

    try {
        const message = req.body.message
        const prompt = `
            You are FinderBot, an AI that helps users find products or related products based on user requests or suggestions.
            Here is the product catalog: 
            ${catalogSummary}
            User query: 
            ${message}
            Instructions:
            - Suggest the best product from the catalog based on request or conversation.
            - Be brief and natrual with the your responses.
            - If unsure, ask clarifying questions.
        `
        const completion = await client.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {role: 'system', content: 'You are a helpful product finder.'},
                {role: 'user', content: prompt}
            ],
            temperature: 0.4
        })
        const finderBotReply = completion.choices[0].message.content
        return res.status(200).json({reply: finderBotReply})
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: err})
    }
}

export async function finderConfig(req, res) {
    const {sessionId, productCatalog} = req.body
    const id = uuidv4()
    const time = new Date()

    try {
        // const validate = productValidator(productCatalog)
        const query = `
            INSERT INTO prodcatalog (id, sessionid, catalog, time)
            VALUES ($1, $2, $3, $4)
            RETURNING *
        `
        const values = [id, sessionId, JSON.stringify(productCatalog), time]
        const sendCatalog = await pool.query(query, values)
        return res.status(200).json({message: 'Product catalog updated sucessfully, AI memory refreshed'})
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: 'error', error: err})
    }
}