import {body} from 'express-validator'

export const keyValidator = [
    body('email').isEmail().withMessage('Invalid email address').trim()
]