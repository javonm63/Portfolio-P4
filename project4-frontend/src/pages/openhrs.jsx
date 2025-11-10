import { useEffect } from 'react'
import Navbar from '../components/navbar'
import SideNav2 from '../components/sideNav2'
import { howToUseHooks } from '../hooks/apiHooks'
import '../styles/helpbot.css'
import { Authen, BestP, InterFlow, Message, Response1, Response2, SendPS, Session } from '../utils/page-schema'
import CodeSnippet from '../utils/snippets'
import { BestP4, ConfigForm, ConfigForm2, InterFlow4, IsOpen, Response7, Response8 } from '../utils/page-schema2'
import DemoCard from '../components/demoCard'
import SecondSide from '../components/secondSide'
import { dashboardHooks } from '../hooks/dashHooks'
import { authUser } from '../utils/authUser'

function OpenHrs() {
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
            const schemaSample = ConfigForm2()
            const messageSample = IsOpen()
            const resSample = Response8()
            const res2Sample = Response7()
            setSample(messageSample)
            setSample2(schemaSample)
            setSample3(resSample)
            setSample4(res2Sample)
        }
        setSampleSnippet()
    })

    const showSnippet = (e) => {
        if (e.target.value === 'Send Page Schema') {
            const code = ConfigForm2()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Send User Messages') {
            const code = IsOpen()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Authentication') {
            const code = Authen()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Session Setup') {
            const code = ConfigForm()
            setSnipptTitle(`Config Format Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Interaction Flow') {
            const code = InterFlow4()
            setSnipptTitle(`${e.target.value}`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Best Practices') {
            const code = BestP4()
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
                <SideNav2 page={'Openhrs'} setDisp={setSecSide}/>
                <SecondSide disp={secSide}/>
            </header> 
            <h1 className='apikey-page-title'>OpenHrs</h1>
            <article className='api-pages-container1'>
                <h2 className='api-page-title'>OpenHrs API</h2>
                <p className='api-page-card1-info'>This OpenHrs API is an AI tool made to help online bussineses manage and automate their availibity and opening hours. Our API helps by making sure the 'stores hrs' listed on your business website is always available and updated for your users/clients.</p>
            </article>
            <article className='api-pages-container2'>
                <section className='api-page-card2-left-cont'>
                    <h2 className='section2-titles'>Getting Started</h2>
                    <div className='section2-grids'>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>What You Provide</h3>
                            <p className='section2-info'>Business hours and timezones</p>
                            <p className='section2-info'>Holiday exceptions or blackout hours</p>
                            <p className='section2-info'>User questions from your chat UI/ availability input</p>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>What OpenHrs Provide</h3>
                            <p className='section2-info'>AI powered availability/opening hours related responses</p>
                            <p className='section2-info'>Automatically keeps opening hours updated for dev use; for example setting up a 'opening hours' display etc.</p>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Authentication</h3>
                            <p className='section2-info'>All requests require your API key</p>
                            <button className='section2-info-btns' type='button' value='Authentication' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Bot Config Format</h3>
                            <p className='section2-info'>Submit business hours to the API</p>
                            <p className='section2-info'>One time setup -- you only repeat if business hours change</p>
                            <button className='section2-info-btns' type='button' value='Session Setup' onClick={showSnippet}>view example</button>
                        </section>
                    </div>
                </section>
                <section className='api-page-card2-right-cont'>
                    <h2 className='section2-titles'>How To Use</h2>
                    <div className='section2-grids'>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Send Bot Config</h3>
                            <p className='section2-info'>This can be done from a button setup in the admin panel of your website</p>
                            <button className='section2-info-btns' type='button' value='Send Page Schema' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Send User Messages</h3>
                            <p className='section2-info'>Use the endpoint /openhrs for user messages and availability requests</p>
                            <button className='section2-info-btns' type='button' value='Send User Messages' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Interaction Flow</h3>
                            <p className='section2-info'>This is the recommended UI/UX & data flow for using OpenHrsAI API</p>
                            <button className='section2-info-btns' type='button' value='Interaction Flow' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Best Practices</h3>
                            <p className='section2-info'>The following is to ensure you get the most out of OpenHrsAI</p>
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
                    <h2 className='section2-info-titles'>Endpoints Available</h2>
                    <p className='section2-info' style={{marginBottom: '25px'}}>/get-openhrs    /openhrs-config</p>
                    <p className='section2-info-titles'>Sample Request /get-openhrs</p>
                    <CodeSnippet code={sample} width='88%' height='20%' position='relative' left='0%' />
                    <p className='section2-info-titles'>Sample Request /openhrs-config</p>
                    <CodeSnippet code={sample2} width='88%' height='20%' position='relative' left='0%' />
                </section>
                <section className='section3-right-cont'>
                    <h2 className='section2-info-titles'>Endpoints Available</h2>
                    <p className='section2-info' style={{marginBottom: '25px'}}>/get-openhrs    /openhrs-config</p>
                    <p className='section2-info-titles'>Sample Responses /get-openhrs</p>
                    <CodeSnippet code={sample3} width='88%' height='20%' position='relative' left='0%' />
                    <p className='section2-info-titles'>Sample Responses /openhrs-config</p>
                    <CodeSnippet code={sample4} width='88%' height='20%' position='relative' left='0%' />
                </section>
            </article>
            <DemoCard btn={'/get-openhrs'} btn2={'/openhrs-config'} endpoint={'get-openhrs'} message={"Are you open tomorrow?"}/>
        </div>
    )
}

export default OpenHrs