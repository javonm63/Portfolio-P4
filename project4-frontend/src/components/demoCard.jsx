import { dashboardHooks } from '../hooks/dashHooks'
import '../styles/demoCard.css'
import CodeSnippet from '../utils/snippets'
import {v4 as uuidv4} from 'uuid'

function DemoCard({btn, btn2, endpoint, message}) {
    const demoHooks = dashboardHooks()
    const demoMessage = demoHooks.demoMessage
    const setDemoMessage = demoHooks.setDemoMessage
    const sessionId = 'thisisjustatest20254567890987654'

    const testHelp = async () => {
        try {
            const req = await fetch(`https://portfolio-p4-backend.onrender.com/api/bot/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer d59ca774-e345-4324-b862-e98a09eb1301',
                    'Content-Type': 'application/json'},
                body: JSON.stringify({
                    sessionId, 
                    message: message
                }),
                credentials: 'include'
            })

            if (!req.ok) {
                const error = await req.json()
                console.log(error)
            } else {
                const data = await req.json()
                const demoMess = data.reply
                setDemoMessage(`Status(200) { reply: '${demoMess}' }`)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const testSchema = async (e) => {
        let body;
        if (e.target.value === '/page-schema') {
            body = {sessionId, 
                    pageSchema: [
                        {title: 'home', url: '/'},
                        {title: 'pricing', url: '/pricing'},
                        {title: 'account settings', url: '/setting/account'},
                        {title: 'billing', url: '/settings/billing'},
                    ]}
        } else if (e.target.value === '/chat-config') {
            body = {sessionId, 
                    instruction: 'You are SupportBot for Acme Corp. Be friendly, concise, and ask clarifying questions.'}
        } else if (e.target.value === '/faq-sync') {
            body = {sessionId,
                    siteId: 'Example-Store',
                    faqs: [
                        {
                            "question": "How do I reset my password?",
                            "answer": "Visit the account settings page and click 'Reset Password'."
                        },{
                            "question": "Where can I track my order?",
                            "answer": "You can track you order under the 'Orders' tab."
                        }
                    ]
            }
        } else if (e.target.value === '/openhrs-config') {
            body = {sessionId,
                    businessConfig: {
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
                            {date: "2025-12-25", closed: true}
                        ]
            }}   
        } else if (e.target.value === '/finder-config') {
            body = {sessionId,
                    productCatalog: [
                        {
                            id: "prod_001",
                            name: "Midnight Hoodie",
                            price: "49.99",
                            tags: ["streetwear", "black", "hoodie", "winter"],
                            image: "https://store.com/img/hoodie.png",
                        }, {
                            id: "prod_002",
                            name: "Firered Hoodie",
                            price: "49.99",
                            tags: ["streetwear", "red", "hoodie", "winter"],
                            image: "https://store.com/img/hoodiered.png",
                        }
                ]}
        }
        try {
            const req = await fetch(`https://portfolio-p4-backend.onrender.com/api/bot${e.target.value}`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer d59ca774-e345-4324-b862-e98a09eb1301',
                    'Content-Type': 'application/json'},
                body: JSON.stringify(body),
                credentials: 'include'
            })

            if (!req.ok) {
                const error = await req.json()
                console.log(error)
            } else {
                const data = await req.json()
                const demoMess = data.message
                setDemoMessage(`Status(200) { message: '${demoMess}' }`)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <article className='demoCard-main-container'>
            <h2 className='demoCard-title'>Live Demo</h2>
            <section className='demo-cont'>
                <CodeSnippet code={demoMessage} width='99%' height='60%' position='relative' left='0%' />
            </section>
            <button className='demo-button' value={btn} type='button' onClick={testHelp}>{`test ${btn}`}</button>
            <button className='demo-button' value={btn2} type='button' onClick={testSchema}>{`test ${btn2}`}</button>
        </article>
    )
}

export default DemoCard