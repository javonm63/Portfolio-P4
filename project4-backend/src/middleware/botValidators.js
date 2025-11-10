import {body} from 'express-validator'

export function schemaValidator(req) {
    const schema = req.body.pageSchema
    const validateSchema = schema.filter(page => page.title && page.url).map(page => ({
        title: page.title.trim(),
        url: page.url.trim()
    }))
    return validateSchema
}
export const messageValidator = [
    body('message').isString().trim().notEmpty().withMessage('message required.')
]
export const configValidator = [
    body('instruction').isString().trim().notEmpty().withMessage('instruction required.')
]
export function faqsValidator(req) {
    const faqs = req.body.faqs
    const validateFaqs = faqs.filter(fact => fact.question && fact.answer).map(fact => ({
        question: fact.question.trim(),
        answer: fact.answer.trim()
    }))
    return validateFaqs
}
export function productValidator(products) {
    console.log(products)
    const validateProducts = products.filter(product => product.id && product.name && product.price && product.tag && product.image).map(product => ({
        id: product.id.trim(),
        name: product.name.trim(),
        price: product.price.trim(),
        tag: product.tag.trim(),
        image: product.image.trim(),
    }))
    console.log(validateProducts)
    return validateProducts
}

// setup validation for the finder bot 