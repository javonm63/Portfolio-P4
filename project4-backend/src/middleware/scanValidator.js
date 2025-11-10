import {body} from 'express-validator'

export const validateScan = [
    body('websiteUrl').isString().notEmpty().withMessage('website URL is required').trim()
] 