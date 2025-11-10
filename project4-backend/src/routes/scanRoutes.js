import express from 'express'
import { scanSite } from '../controllers/scan.js'
import { validateScan } from '../middleware/scanValidator.js'
import { keyValHelper } from '../helper/getKeyValHelper.js'

const scanRouter = express.Router()

scanRouter.post('/website', validateScan, keyValHelper, scanSite)

export default scanRouter