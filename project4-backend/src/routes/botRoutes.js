import express from 'express'
import { GetHelp, HelpBotConfig } from '../controllers/helpbot.js'
import { ChatBot, ChatConfig } from '../controllers/chatBot.js'
import { FaqBot, FaqBotSync } from '../controllers/faqbot.js'
import { GetOpenHrs, OpenHrsConfig } from '../controllers/openhrs.js'
import { finderBot, finderConfig } from '../controllers/finder.js'
import { configValidator, messageValidator } from '../middleware/botValidators.js'
import { keyValHelper } from '../helper/getKeyValHelper.js'

const router = express.Router()
// HELPBOT 
router.post('/help', messageValidator, keyValHelper, GetHelp)
router.post('/page-schema', HelpBotConfig)
// CHATBOT 
router.post('/chat', messageValidator, keyValHelper, ChatBot)
router.post('/chat-config', configValidator, keyValHelper, ChatConfig)
// FAQBOT 
router.post('/faq-chat', messageValidator, keyValHelper, FaqBot)
router.post('/faq-sync', FaqBotSync)
// OPENHRS 
router.post('/get-openhrs', messageValidator, keyValHelper, GetOpenHrs)
router.post('/openhrs-config', OpenHrsConfig)
// FINDER
router.post('/finderBot', messageValidator, keyValHelper, finderBot)
router.post('/finder-config', finderConfig)

export default router