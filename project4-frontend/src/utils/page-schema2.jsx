export function Knowledge() {
    const code = `
        {
            "faqs": [
                {
                    "question": "How do I reset my password?",
                    "answer": "Visit the account settings page and click 'Reset Password'."
                },{
                    "question": "Where can I track my order?",
                    "answer": "You can track you order under the 'Orders' tab."
                }
            ]
        }
    `
    return code
}

export function Knowledge2() {
    const code = `
        await fetch('https://api.bizai.com/faq-sync', {
            method: "POST",
            headers,
            body: JSON.stringify({
                sessionId,
                siteId: "example-store",
                faqs
            })
        });
    `
    return code
}

export function Questions() {
    const code = `
        const res = await fetch('https://api.bizai.com/faq-chat', {
            method: "POST",
            headers,
            body: JSON.stringify({
                sessionId,
                message: "I can't log into my account"
            })
        });

        const data = await res.json()
    `
    return code
}

export function InterFlow3() {
    const code = `
        Event         Action         Endpoint
    admin update   send dataset   /faq-sync
      questions    send message    /faq-chat
    `
    return code
}

export function BestP3() {
    const code = `
        Include at least 10-20 FAQs
        Ensure questions are written in a user-like tone
        Keep answers short and actionable
        Update often with real confusion points
    `
    return code
}

export function Response5() {
    const code = `
        status(200)
        {
            message: "FAQs dataset updated, AI analiyst complete"
        }
        status(400)
        {
            message: "Bad Request"
        }
        status(401)
        {
            message: "Unauthorized Request"
        }
        status(500)
        {
            message: "Internal Server Error"
        }
    `
    return code
}
export function Response6() {
    const code = `
        status(200)
        {
            "reply": "You may need to reset you password. Go to account settings and click 'Reset Password'.",
            "matchedFaq": {
                "question": 'How do I reset my password?',
            }
            "confidence": 0.92
        }
        status(400)
        {
            message: "Bad Request"
        }
        status(401)
        {
            message: "Unauthorized Request"
        }
        status(500)
        {
            message: "Internal Server Error"
        }
    `
    return code
}

export function ConfigForm() {
    const code = `
        const businessConfig = {
            "timezone": "America/Chicago",
            "weekly_hours": {
                "mon": ["09:00-18:00"],
                "tue": ["09:00-18:00"],
                "wed": ["09:00-18:00"],
                "thu": ["09:00-18:00"],
                "fri": ["09:00-20:00"],
                "sat": ["10:00-16:00"],
                "sun": [],
            },
            "holiday_exceptions": [
                {"date": "2025-12-25, "closed": true}
            ]
        }
    `
    return code
}
export function ConfigForm2() {
    const code = `
    await fetch('https://api.bizai.com/openhrs-config', {
        method: "POST",
        headers,
        body: JSON.stringify({siteId, BusinessConfig})
    })
    `
    return code
}

export function IsOpen() {
    const code = `
    await fetch('https://api.bizai.com/get-openhrs', {
        method: "POST",
        headers,
        body: JSON.stringify({
            "sessionId", 
            "message": "Are you open tomorrow?"
        })
    })
    `
    return code
}
export function InterFlow4() {
    const code = `
        Event          Action         Endpoint
    initial setup   send config      /openhrs-config
    hours change    update hours     /openhrs-config
      user ask      send message     /get-openhrs
    add holiday     send config      /openhrs-config
    `
    return code
}

export function BestP4() {
    const code = `
        Sync changes via webhook when changes occur
        Always specify timezone when setting up config
        Send exceptions at least 7 before holiday date
        Rotate API regularly to keep security strict and safe
        Cache responses to repeated questions to minimize rate limit 
    `
    return code
}

export function Response7() {
    const code = `
        status(200)
        {
            message: "Business hours updated, AI memory updated"
        }
        status(400)
        {
            message: "Bad Request"
        }
        status(401)
        {
            message: "Unauthorized Request"
        }
        status(500)
        {
            message: "Internal Server Error"
        }
    `
    return code
}
export function Response8() {
    const code = `
        status(200)
        {
            "reply": "Yes! We're open from 9AM to 6PM on Tuesdays",
        }
        status(400)
        {
            message: "Bad Request"
        }
        status(401)
        {
            message: "Unauthorized Request"
        }
        status(500)
        {
            message: "Internal Server Error"
        }
    `
    return code
}

export function ConfigFind() {
    const code = `
        const productCatalog = [
            {
                "id": "prod_001",
                "name": "Midnight Hoodie",
                "price": "49.99",
                "tags": ["streetwear", "black", "hoodie", "winter"],
                "image": "https://store.com/img/hoodie.png",
            }, {
                "id": "prod_002",
                "name": "Firered Hoodie",
                "price": "49.99",
                "tags": ["streetwear", "red", "hoodie", "winter"],
                "image": "https://store.com/img/hoodiered.png",
            }
        ]
    `
    return code
}
export function ConfigFind2() {
    const code = `
    await fetch('https://api.bizai.com/finder-config', {
        method: "POST",
        headers,
        body: JSON.stringify({siteId, productCatalog})
    })
    `
    return code
}

export function Product() {
    const code = `
    await fetch('https://api.bizai.com/finderBot', {
        method: "POST",
        headers,
        body: JSON.stringify({
            "sessionId", 
            "message": "Looking for something comfortable for winter"
        })
    })
    `
    return code
}
export function InterFlow5() {
    const code = `
        Event            Action           Endpoint
    sync catalog      send catalog     /finder-config
      user ask        send message     /finderBot
  user ask details    send config      /finderBot
    `
    return code
}

export function BestP5() {
    const code = `
        Tag products well so FinderBot gives better intent matches
        Include at least 100 products to you catalog for stronger suggestions
        Refresh catalog weekly or bi-weekly for new products accuracy
        Show responses + products visually to reach high conversions
        Provide CTA buttons for a simple more direct UX
    `
    return code
}

export function Response9() {
    const code = `
        status(200)
        {
            message: "Product catalog updated sucessfully, AI memory refreshed"
        }
        status(400)
        {
            message: "Bad Request"
        }
        status(401)
        {
            message: "Unauthorized Request"
        }
        status(500)
        {
            message: "Internal Server Error"
        }
    `
    return code
}
export function Response10() {
    const code = `
        status(200)
        {
            "reply": "These four hoodies are warm and popular right now!",
            "products": [
                {
                    "id": "prod_002",
                    "name": "Firered Hoodie",
                    "price": "49.99",
                    "image": "https://store.com/img/hoodiered.png",
                }, {
                    "id": "prod_002",
                    "name": "Firered Hoodie",
                    "price": "49.99",
                    "image": "https://store.com/img/hoodiered.png",
                }
            ]
        }
        status(400)
        {
            message: "Bad Request"
        }
        status(401)
        {
            message: "Unauthorized Request"
        }
        status(500)
        {
            message: "Internal Server Error"
        }
    `
    return code
}