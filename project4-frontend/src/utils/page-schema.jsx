export function SendPS() {
    const code = `await fetch("https://api.helpbot.com/page-schema", {
        method: "POST",
        headers,
        body: JSON.stringify({
            sessionId,
            pageSchema: {
            pageId: "dmv-renewal-001",
            url: window.location.href,
            title: "Renew License",
            description: "This page allows users to renew their driver’s license.",
            breadcrumbs: ["Home", "License Services", "Renew"],
            sections: [
                {
                "id": "eligibility",
                "label": "Eligibility Requirements",
                "content": "Users must be 18 or older..."
                },
                {
                "id": "start-btn",
                "label": "Start Renewal",
                "selector": "#start-renewal-btn",
                "action": {
                    "type": "navigate",
                    "target": "/start-renewal"
                }
                }
            ]
            }
        })
        });`
    return code
}

export function Config() {
    const code = `
        await fetch('https://api.bizai.com/chat-config', {
        method: 'POST',
        headers,
        body: JSON.stringify({
            sessionId, 
            instructions: 
                'You are SupportBot for Acme Corp.
                Be friendly, concise, and ask clarifying questions.
            })
        })
    `
    return code
}


export function Authen() {
    const code = `
        Authorization: Bearer <YOUR_API_KEY>
        Content-Type: application/json
    `
    return code
}

export function Session() {
    const code = `
        const sessionId = localStorage.getItem('HelpBot-Session')
        ?? crypto.randomUUID();
        localStorage.setItem('HelpBot-Session', sessionId)
    `
    return code
}

export function Session2() {
    const code = `
        const sessionId = localStorage.getItem('ChatBot-Session')
        ?? crypto.randomUUID();
        localStorage.setItem('ChatBot-Session', sessionId)
    `
    return code
}

export function Message() {
    const code = `
        const res = await fetch('https://api.bizai.com/help', {
            method: 'POST',
            headers,
            body: JSON.stringify({
                sessionId, 
                message: 'Where do I start the renewal?'
            })
        })
        const {reply, suggestedActions} = await res.json()
    `
    return code
}
export function Message2() {
    const code = `
        const res = await fetch('https://api.bizai.com/chat', {
            method: 'POST',
            headers,
            body: JSON.stringify({
                sessionId, 
                message: 'Hey, I need help with my account.'
            })
        })
        const data = await res.json()
        //data.reply = AI response text
    `
    return code
}

export function InterFlow() {
    const code = `
        Event        Action       Endpoint
      page load   send schema   /page-schema
      questions   send message  /help
      new page    send schema   /page-schema
    `
    return code
}
export function InterFlow2() {
    const code = `
        Event         Action         Endpoint
    1st open chat  send instruc.   /chat-config
      questions    send message    /chat
      reload      keep sessionId   localStorage
    `
    return code
}

export function BestP() {
    const code = `
        Stable & unique pageId
        Include action targets for Navigation
        Include selectors for spotlighting UI elements
        Update schema when the site changes
    `
    return code
}
export function BestP2() {
    const code = `
        Use sessionId to maintain conversation memory
        Configure tone and knowledge with instructions
        Support typing indicators while waiting for responses
        Handle error states gracefully
    `
    return code
}
export function Response1() {
    const code = `
        status(200)
        {
            message: "schema accepted, AI analiyst complete"
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
export function Response2() {
    const code = `
        status(200)
        {
            "reply": 'You can click the start renewal button below.',
            "suggestedAction": {
                "type": 'navigate',
                "target": '/start-renewal'
            }
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

export function Response3() {
    const code = `
        status(200)
        {
            "reply": "Sure! What do you need help with on your account?"
            "confidence": 0.97
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
export function Response4() {
    const code = `
        status(200)
        {
            message: "instructions accepted, ChatBot configuration complete"
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