export function normalize(raw) {
    return raw.map(page => ({
        title: String(page.title).trim(),
        url: String(page.url).trim()
    }))
}
export function normalize2(raw) {
    return raw.map(page => ({
        question: String(page.question).trim(),
        asnwer: String(page.answer).trim()
    }))
}