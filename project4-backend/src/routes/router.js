import express from 'express'
import router from './botRoutes.js'

const Router = express.Router()

Router.use('/bot', router)

export default Router