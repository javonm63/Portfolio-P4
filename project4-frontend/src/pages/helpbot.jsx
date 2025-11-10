import { useEffect } from 'react'
import Navbar from '../components/navbar'
import SideNav2 from '../components/sideNav2'
import { howToUseHooks } from '../hooks/apiHooks'
import '../styles/helpbot.css'
import { Authen, BestP, InterFlow, Message, Response1, Response2, SendPS, Session } from '../utils/page-schema'
import CodeSnippet from '../utils/snippets'
import DemoCard from '../components/demoCard'
import { dashboardHooks } from '../hooks/dashHooks'
import SecondSide from '../components/secondSide'
import { authUser } from '../utils/authUser'

function HelpBot() {
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
            const schemaSample = SendPS()
            const messageSample = Message()
            const resSample = Response1()
            const res2Sample = Response2()
            setSample(messageSample)
            setSample2(schemaSample)
            setSample3(resSample)
            setSample4(res2Sample)
        }
        setSampleSnippet()
    })

    const showSnippet = (e) => {
        if (e.target.value === 'Send Page Schema') {
            const code = SendPS()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Send User Messages') {
            const code = Message()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Authentication') {
            const code = Authen()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Session Setup') {
            const code = Session()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Interaction Flow') {
            const code = InterFlow()
            setSnipptTitle(`${e.target.value}`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Best Practices') {
            const code = BestP()
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
                <SideNav2 page={'HelpBot'} setDisp={setSecSide}/>
                <SecondSide disp={secSide}/>
            </header>
            <h1 className='apikey-page-title'>HelpBot</h1>
            <article className='api-pages-container1'>
                <h2 className='api-page-title'>HelpBot API</h2>
                <p className='api-page-card1-info'>HelpBot is AI powered tool made to help users navigate through online business websites, forms and information, perfect for multi-page applications and information driven websites.</p>
            </article>
            <article className='api-pages-container2'>
                <section className='api-page-card2-left-cont'>
                    <h2 className='section2-titles'>Getting Started</h2>
                    <div className='section2-grids'>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>What You Provide</h3>
                            <p className='section2-info'>Page structure data (page-schema)</p>
                            <p className='section2-info'>Chat UI component on your site</p>
                            <p className='section2-info'>Logic for sending messages to HelpBot API</p>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>What HelpBot Provide</h3>
                            <p className='section2-info'>AI powered smart nav & guidance responses</p>
                            <p className='section2-info'>Context memory tied to sessionId</p>
                            <p className='section2-info'>Page understanding from your schema</p>
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
                            <h3 className='section2-info-titles'>Send Page Schema</h3>
                            <p className='section2-info'>Call inside a useEffect, router, hook or onLoad</p>
                            <button className='section2-info-btns' type='button' value='Send Page Schema' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Send User Messages</h3>
                            <p className='section2-info'>Use the endpoint /help for user messages and nav requests </p>
                            <button className='section2-info-btns' type='button' value='Send User Messages' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Interaction Flow</h3>
                            <p className='section2-info'>This is the recommended UI/UX & data flow for using HelpBot</p>
                            <button className='section2-info-btns' type='button' value='Interaction Flow' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Best Practices</h3>
                            <p className='section2-info'>The following is to ensure you get the most out of HelpBot AI</p>
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
                    <p className='section2-info' style={{marginBottom: '25px'}}>/help    /page-schema</p>
                    <p className='section2-info-titles'>Sample Request /help</p>
                    <CodeSnippet code={sample} width='88%' height='20%' position='relative' left='0%' />
                    <p className='section2-info-titles'>Sample Request /page-schema</p>
                    <CodeSnippet code={sample2} width='88%' height='20%' position='relative' left='0%' />
                </section>
                <section className='section3-right-cont'>
                    <h3 className='section2-info-titles'>Endpoints Available</h3>
                    <p className='section2-info' style={{marginBottom: '25px'}}>/help    /page-schema</p>
                    <p className='section2-info-titles'>Sample Responses /help</p>
                    <CodeSnippet code={sample4} width='88%' height='20%' position='relative' left='0%' />
                    <p className='section2-info-titles'>Sample Responses /page-schema</p>
                    <CodeSnippet code={sample3} width='88%' height='20%' position='relative' left='0%' />
                </section>
            </article>
            <DemoCard btn={'/help'} btn2={'/page-schema'} endpoint={'help'} message={'Where do I start the renewal process?'}/>
        </div>
    )
}

export default HelpBot