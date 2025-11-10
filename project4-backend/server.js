import http from 'http'
import fs from'fs'
import app from './src/app.js'
import { createTables } from './src/config/database.js'
// GLOBAL VARIBALES
const PORT = process.env.PORT || 5001

// LOAD HTTPS CERTFICATIONS
const options = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem')
}

// CREATING SERVER 
const server = http.createServer(options, app)
try {
  await createTables(); 
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} catch (err) {
  console.error("Error creating tables:", err);
}
