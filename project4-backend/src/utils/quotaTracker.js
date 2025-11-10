import pool from "../config/database.js"

export async function QuotaTracker(req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        next()
    } else {
        const apiKey = authHeader.split(' ')[1]
        const query = `SELECT * FROM users WHERE apikey = $1`
        const value = [apiKey]
        const getKey = await pool.query(query, value)
        const keyDb = getKey.rows[0]
        const {total, success, used, usedval} = keyDb
        const newTotal = Number(total) + 1
        const newSuccess = Number(success) + 1
        const newUsed = Number(used) - 100
        const newUsedVal = Number(usedval) - 0.10
        const newQuery = `UPDATE users SET total = $1, success = $2, used = $3, usedval = $4 WHERE apikey = $5 RETURNING *`
        const newValues = [newTotal, newSuccess, newUsed, newUsedVal, apiKey]
        const updateQuota = await pool.query(newQuery, newValues)
        next()
    }
}

// setup authentication to check every header expect /generate route 
