import pkg from 'pg'

const { Pool } = pkg
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } 
})

export async function createTables() {
  const client = await pool.connect();
  try {
    // chatconfigs
    await client.query(`
      CREATE TABLE IF NOT EXISTS chatconfigs (
        id VARCHAR PRIMARY KEY,
        sessionid VARCHAR,
        models VARCHAR,
        instructions VARCHAR,
        time VARCHAR
      )
    `);

    // faqs
    await client.query(`
      CREATE TABLE IF NOT EXISTS faqs (
        id VARCHAR PRIMARY KEY,
        sessionid VARCHAR,
        siteid VARCHAR,
        faqs JSONB,
        time VARCHAR
      )
    `);

    // openhrs
    await client.query(`
      CREATE TABLE IF NOT EXISTS openhrs (
        id VARCHAR PRIMARY KEY,
        sessionid VARCHAR,
        openhrs JSONB,
        time VARCHAR
      )
    `);

    // prodcatalog
    await client.query(`
      CREATE TABLE IF NOT EXISTS prodcatalog (
        id VARCHAR PRIMARY KEY,
        sessionid VARCHAR,
        catalog JSONB,
        time VARCHAR
      )
    `);

    // schemas
    await client.query(`
      CREATE TABLE IF NOT EXISTS schemas (
        id VARCHAR PRIMARY KEY,
        sessionid VARCHAR,
        schema JSONB,
        time VARCHAR
      )
    `);

    // users
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        email VARCHAR PRIMARY KEY,
        apikey VARCHAR,
        total NUMERIC DEFAULT 0,
        success NUMERIC DEFAULT 0,
        failed NUMERIC DEFAULT 0,
        used NUMERIC DEFAULT 100000,
        usedval NUMERIC DEFAULT 100
      )
    `);

    console.log("All tables created or already exist!");
  } finally {
    client.release();
  }
}

export default pool 