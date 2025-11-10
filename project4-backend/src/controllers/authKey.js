import {v4 as uuidv4} from 'uuid'
import pool from '../config/database.js'

export async function AuthKey(req, res) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const existing = await pool.query(
      'SELECT apikey FROM users WHERE email = $1',
      [email]
    );

    if (existing.rows.length >= 7) {
      return res.status(400).json({
        message: 'API key limit reached (max 7 per email)',
      });
    }

    const apiKey = uuidv4();
    console.log(apiKey)

    const query = `
      INSERT INTO users (email, apikey)
      VALUES ($1, $2)
      RETURNING email, apikey
    `;
    const values = [email, apiKey];
    const result = await pool.query(query, values);

    return res.status(201).json({
      message: 'API key created successfully',
      user: result.rows[0],
    });
  } catch (err) {
    console.error('AuthKey error:', err.message);
    if (!res.headersSent) {
      console.error(err)
      return res.status(500).json({ message: 'Server error', error: err.message });
    }
  }
}

// setup a 5-7 api key limit for each email in the database