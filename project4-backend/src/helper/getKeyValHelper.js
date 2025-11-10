import { validationResult } from "express-validator"

export function keyValHelper(req, res, next) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({message: 'validation error', error: errors.array()})
    } else {
        next()
    }
}