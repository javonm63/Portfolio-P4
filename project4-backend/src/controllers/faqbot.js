import pool from "../config/database.js"
import { v4 as uuidv4 } from 'uuid'
import OpenAI from "openai"
import { faqsValidator } from "../middleware/botValidators.js"
import { normalize2 } from "../utils/normalize.js"

const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY
})
export async function FaqBot(req, res) {
    const sessionId = req.body.sessionId
    const query = `SELECT * FROM faqs WHERE sessionid = $1`
    const value = [sessionId]
    const getFaqs = await pool.query(query, value)
    if (getFaqs.rows.length === 0) {
        return res.status(500).json({error: 'Server error, no internal webiste faqs found'})
    }
    const rawFaqs = getFaqs.rows[0].faqs

    const faqs = normalize2(rawFaqs)
    const faqsSummary = faqs.map(faq => `+ ${faq.question} - ${faq.answer}`).join('/n')

    try {
        const message = req.body.message
        const prompt = `
            You are FaqsBot, an AI that helps users answer frequestly asked questions about a specific website/information.
            Here is the website faqs: 
            ${faqsSummary}
            User query: 
            ${message}
            Instructions:
            - Suggest the best asnwer based on the provided faqs.
            - Be brief and natrual with the your responses.
            - If unsure, ask clarifying questions or search the web for related topics.
        `
        const completion = await client.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {role: 'system', content: 'You are a helpful assistant for website questions.'},
                {role: 'user', content: prompt}
            ],
            temperature: 0.4
        })
        const faqBotReply = completion.choices[0].message.content
        return res.status(200).json({reply: faqBotReply})
    } catch (err) {
        console.log(err)
        return res.status(500).json({error: err})
    }
}

export async function FaqBotSync(req, res) {
    const {sessionId, siteId, faqs} = req.body
    const id = uuidv4()
    const time = new Date()

    try {
        const validate = faqsValidator(req)
        const query = `
            INSERT INTO faqs (id, sessionId, siteId, faqs, time)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `
        const values = [id, sessionId, siteId, JSON.stringify(validate), time]
        const sendFaqs = await pool.query(query, values)
        return res.status(200).json({message: 'FAQs dataset updated, AI analiyst complete'})
    } catch (err) {
        console.log(err)
        return res.status(500).json({message: 'error', error: err})
    }
}