import express from 'express'
import { AuthKey } from '../controllers/authKey.js'
import  { keyValidator } from '../middleware/getKeyValidator.js'
import { keyValHelper } from '../helper/getKeyValHelper.js'
import { GetQuota } from '../controllers/getQuota.js'

const router = express.Router()

router.post('/generate', keyValidator, keyValHelper, AuthKey)
router.get('/quota', GetQuota)

export default router 