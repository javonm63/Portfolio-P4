import http from 'http'
import fs from'fs'
import app from './src/app.js'
// GLOBAL VARIBALES
const port = process.env.PORT || 5001

// LOAD HTTPS CERTFICATIONS
const options = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem')
}

// CREATING SERVER 
const server = http.createServer(options, app)
server.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})
