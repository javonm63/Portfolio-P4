import pool from "../config/database.js";

export async function GetQuota(req, res) {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Email ')) {
        return res.status(500).json({message: 'Invalid Credentials'})
    } else {
        const email2 = authHeader.split(' ')[1]
        const query = `SELECT * FROM users WHERE email = $1`
        const value = [email2]
        const getUser = await pool.query(query, value)
        const userDb = getUser.rows[0]
        const { email, apikey, ...rest} = userDb
        return res.status(200).json({message: "here's your quota", quota: rest})
    }
    
}