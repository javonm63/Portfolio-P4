import { useEffect } from 'react'
import Navbar from '../components/navbar'
import SideNav2 from '../components/sideNav2'
import { howToUseHooks } from '../hooks/apiHooks'
import '../styles/helpbot.css'
import { Authen, BestP, BestP2, Config, InterFlow, InterFlow2, Message, Message2, Response1, Response2, Response3, Response4, SendPS, Session, Session2 } from '../utils/page-schema'
import CodeSnippet from '../utils/snippets'
import DemoCard from '../components/demoCard'
import SecondSide from '../components/secondSide'
import { dashboardHooks } from '../hooks/dashHooks'
import { authUser } from '../utils/authUser'

function ChatBot() {
    const helpBotHooks = howToUseHooks()
    const showSnip = helpBotHooks.showSnip
    const setShowSnip = helpBotHooks.setShowSnip
    const snippetTitle = helpBotHooks.snippetTitle
    const setSnipptTitle = helpBotHooks.setSnippetTitle
    const snippet = helpBotHooks.snippet
    const setSnippet = helpBotHooks.setSnippet
    const sample = helpBotHooks.sample
    const setSample = helpBotHooks.setSample
    const sample2 = helpBotHooks.sample2
    const setSample2 = helpBotHooks.setSample2
    const sample3 = helpBotHooks.sample3
    const setSample3 = helpBotHooks.setSample3
    const sample4 = helpBotHooks.sample4
    const setSample4 = helpBotHooks.setSample4

    const navHook = dashboardHooks()
    const secSide = navHook.secSide
    const setSecSide = navHook.setSecSide

    useEffect(() => {
        authUser()
        const setSampleSnippet = () => {
            const schemaSample = Config()
            const messageSample = Message2()
            const resSample = Response3()
            const res2Sample = Response4()
            setSample(messageSample)
            setSample2(schemaSample)
            setSample3(resSample)
            setSample4(res2Sample)
        }
        setSampleSnippet()
    })

    const showSnippet = (e) => {
        if (e.target.value === 'Send Page Schema') {
            const code = Config()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Send User Messages') {
            const code = Message2()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Authentication') {
            const code = Authen()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Session Setup') {
            const code = Session2()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Interaction Flow') {
            const code = InterFlow2()
            setSnipptTitle(`${e.target.value}`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Best Practices') {
            const code = BestP2()
            setSnipptTitle(`${e.target.value} Tips`)
            setSnippet(code)
            setShowSnip(true)
        }
    }
    const closeSnippet = () => {
        setShowSnip(false)
    }
    return (
        <div className='helpbot-page-container'>
            <header>
                <Navbar />
                <SideNav2 page={'ChatBot'} setDisp={setSecSide}/>
                <SecondSide disp={secSide}/>
            </header>
            <h1 className='apikey-page-title'>ChatBot</h1>
            <article className='api-pages-container1'>
                <h2 className='api-page-title'>ChatBot API</h2>
                <p className='api-page-card1-info'>Our bot is an AI powered chatbot created to replace the generic chatbot you typically find on most websites, providing faster, smarter and more user friendly responses.</p>
            </article>
            <article className='api-pages-container2'>
                <section className='api-page-card2-left-cont'>
                    <h2 className='section2-titles'>Getting Started</h2>
                    <div className='section2-grids'>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>What You Provide</h3>
                            <p className='section2-info'>Your own chat UI</p>
                            <p className='section2-info'>User session management</p>
                            <p className='section2-info'>Any custom context you want to send to the bot</p>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>What ChatBot Provide</h3>
                            <p className='section2-info'>Natrual language response from AI</p>
                            <p className='section2-info'>Optional memory per session</p>
                            <p className='section2-info'>Custom behavior through instructions</p>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Authentication</h3>
                            <p className='section2-info'>All requests require your API key</p>
                            <button className='section2-info-btns' type='button' value='Authentication' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Session Setup</h3>
                            <p className='section2-info'>Each user on your website must have a unique sessionId</p>
                            <p className='section2-info'>Store it in frontend storage</p>
                            <button className='section2-info-btns' type='button' value='Session Setup' onClick={showSnippet}>view example</button>
                        </section>
                    </div>
                </section>
                <section className='api-page-card2-right-cont'>
                    <h2 className='section2-titles'>How To Use</h2>
                    <div className='section2-grids'>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Set ChatBot Instructions</h3>
                            <p className='section2-info'>Useful for: Business personalities, Brand tone, Behavior control</p>
                            <button className='section2-info-btns' type='button' value='Send Page Schema' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Send User Messages</h3>
                            <p className='section2-info'>Use the endpoint /chat to make user message requests</p>
                            <button className='section2-info-btns' type='button' value='Send User Messages' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Interaction Flow</h3>
                            <p className='section2-info'>This is the recommended UI/UX & data flow for using ChatBot</p>
                            <button className='section2-info-btns' type='button' value='Interaction Flow' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Best Practices</h3>
                            <p className='section2-info'>The following is to ensure you get the most out of ChatBot AI</p>
                            <button className='section2-info-btns' type='button' value='Best Practices' onClick={showSnippet}>view example</button>
                        </section>
                    </div>
                    <aside className='snippet-container' style={{display: showSnip ? 'flex' : 'none'}}>
                        <button className='exit-button' type='button' onClick={closeSnippet}>X</button>
                        <p className='snippet-title'>{snippetTitle}</p>
                        <CodeSnippet code={snippet} width='90%'/>
                    </aside>
                </section>
            </article>
            <article className='api-pages-container3'>
                <section className='section3-left-cont'>
                    <h3 className='section2-info-titles'>Endpoints Available</h3>
                    <p className='section2-info' style={{marginBottom: '25px'}}>/chat    /chat-config</p>
                    <p className='section2-info-titles'>Sample Request /chat</p>
                    <CodeSnippet code={sample} width='88%' height='20%' position='relative' left='0%' />
                    <p className='section2-info-titles'>Sample Request /chat-config</p>
                    <CodeSnippet code={sample2} width='88%' height='20%' position='relative' left='0%' />
                </section>
                <section className='section3-right-cont'>
                    <h3 className='section2-info-titles'>Endpoints Available</h3>
                    <p className='section2-info' style={{marginBottom: '25px'}}>/chat    /chat-config</p>
                    <p className='section2-info-titles'>Sample Responses /chat</p>
                    <CodeSnippet code={sample3} width='88%' height='20%' position='relative' left='0%' />
                    <p className='section2-info-titles'>Sample Responses /chat-config</p>
                    <CodeSnippet code={sample4} width='88%' height='20%' position='relative' left='0%' />
                </section>
            </article>
            <DemoCard btn={'/chat'} btn2={'/chat-config'} endpoint={'chat'} message={'Hey, I need help with my account.'}/>
        </div>
    )
}

export default ChatBot