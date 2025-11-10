import pool from "../config/database.js"

export async function ApiKeyAuth(req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        next()
    } else {
        const apiKey = authHeader.split(' ')[1]
        const query = `SELECT * FROM users WHERE apikey = $1`
        const value = [apiKey]
        const getKey = await pool.query(query, value)
        const keyDb = getKey.rows[0]
        const key = keyDb.apikey
        if (key !== apiKey) {
            return res.status(500).json({message: 'Invalid API key'})
        } else {
            next()
        }
    }
}

// setup authentication to check every header expect /generate route 