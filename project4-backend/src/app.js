import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'
import Router from './routes/router.js'
import { ApiKeyAuth } from './utils/apiKeyAuth.js'
import { QuotaTracker } from './utils/quotaTracker.js'
import router from './routes/authRoutes.js'
import scanRouter from './routes/scanRoutes.js'

const app = express()
const allowedOrigins = [
  'http://localhost:5173',
//   'https://www.freelancerinnvoice.com',
//   'https://freelancerinnvoice.com'
]
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}))
app.use(helmet())
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'))
} else {
  app.use(morgan('dev')) 
}
app.use(express.json())
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, 
  message: 'Too many requests, please try again later.'
})
app.use(ApiKeyAuth)
app.use(QuotaTracker)
// ROUTES 
app.use('/auth', router)
app.use('/scan', scanRouter)
app.use('/api', limiter, Router)

// TEST ROUTE
app.get('/api', (req, res) => {
  return res.send('API is running...')
})
//

app.use((err, req, res, next) => {
  console.error(err.stack)
  return res.status(500).json({ error: 'Something went wrong!' })
})

export default app