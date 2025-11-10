import pool from "../config/database.js"

export async function ApiKeyAuth(req, res, next) {
    try {
    if (req.path === "/auth/generate") {
      return next();
    }

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Missing or invalid authorization header" });
    }

    const apiKey = authHeader.split(" ")[1];

    const result = await pool.query("SELECT * FROM users WHERE apikey = $1", [apiKey]);

    if (result.rows.length === 0) {
      return res.status(403).json({ message: "Invalid or unknown API key" });
    }

    req.user = result.rows[0];

    next();
  } catch (err) {
    console.error("ApiKeyAuth error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

// setup authentication to check every header expect /generate route 