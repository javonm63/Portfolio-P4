import { useEffect } from 'react'
import Navbar from '../components/navbar'
import SideNav2 from '../components/sideNav2'
import { howToUseHooks } from '../hooks/apiHooks'
import '../styles/helpbot.css'
import { Authen, BestP, InterFlow, Message, Response1, Response2, SendPS } from '../utils/page-schema'
import CodeSnippet from '../utils/snippets'
import { BestP3, InterFlow3, Knowledge, Knowledge2, Questions, Response5, Response6 } from '../utils/page-schema2'
import DemoCard from '../components/demoCard'
import SecondSide from '../components/secondSide'
import { dashboardHooks } from '../hooks/dashHooks'
import { authUser } from '../utils/authUser'

function FaqBot() {
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
            const schemaSample = Knowledge2()
            const messageSample = Questions()
            const resSample = Response6()
            const res2Sample = Response5()
            setSample(messageSample)
            setSample2(schemaSample)
            setSample3(resSample)
            setSample4(res2Sample)
        }
        setSampleSnippet()
    })

    const showSnippet = (e) => {
        if (e.target.value === 'Send Page Schema') {
            const code = Knowledge2()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Send User Messages') {
            const code = Questions()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Authentication') {
            const code = Authen()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Knowledge Base') {
            const code = Knowledge()
            setSnipptTitle(`Dataset Format Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Interaction Flow') {
            const code = InterFlow3()
            setSnipptTitle(`${e.target.value}`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Best Practices') {
            const code = BestP3()
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
                <SideNav2 page={'FaqBot'} setDisp={setSecSide}/>
                <SecondSide disp={secSide}/>
            </header>
            <h1 className='apikey-page-title'>FaqBot</h1>
            <article className='api-pages-container1'>
                <h2 className='api-page-title'>FaqBot API</h2>
                <p className='api-page-card1-info'>FaqBot is AI automated frequently asked questions service that was made to automate the already confusing/basic pre-written FAQ sections on most websites.</p>
            </article>
            <article className='api-pages-container2'>
                <section className='api-page-card2-left-cont'>
                    <h2 className='section2-titles'>Getting Started</h2>
                    <div className='section2-grids'>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>What You Provide</h3>
                            <p className='section2-info'>Chat UI or FAQ interface</p>
                            <p className='section2-info'>FAQ dataset (JSON)</p>
                            <p className='section2-info'>Request handling to the API</p>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>What FaqBot Provide</h3>
                            <p className='section2-info'>Smart FAQ understadning + matching</p>
                            <p className='section2-info'>AI-enhanced answering with context</p>
                            <p className='section2-info'>Optional session memory</p>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Authentication</h3>
                            <p className='section2-info'>All requests require your API key</p>
                            <button className='section2-info-btns' type='button' value='Authentication' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Knowledge Base</h3>
                            <p className='section2-info'>Developers can sync their FAQ data from their admin panel or CMS</p>
                            {/* <p className='section2-info'>Store it in frontend storage</p> */}
                            <button className='section2-info-btns' type='button' value='Knowledge Base' onClick={showSnippet}>view example</button>
                        </section>
                    </div>
                </section>
                <section className='api-page-card2-right-cont'>
                    <h2 className='section2-titles'>How To Use</h2>
                    <div className='section2-grids'>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Send FAQ Dataset</h3>
                            <p className='section2-info'>Frontend devs must setup a send data button in their website's admin controls</p>
                            <button className='section2-info-btns' type='button' value='Send Page Schema' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Send User Questions</h3>
                            <p className='section2-info'>Use the endpoint /faq to get a fast AI powered response that's not only relevant but also accurate.</p>
                            <button className='section2-info-btns' type='button' value='Send User Messages' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Interaction Flow</h3>
                            <p className='section2-info'>No need to send a page schema -- all knowledge comes from FAQ dataset.</p>
                            <button className='section2-info-btns' type='button' value='Interaction Flow' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Best Practices</h3>
                            <p className='section2-info'>The following is to ensure you get high accuracy responses from our FaqBot AI</p>
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
                    <p className='section2-info' style={{marginBottom: '25px'}}>/faq-chat    /faq-sync</p>
                    <p className='section2-info-titles'>Sample Request /faq-chat</p>
                    <CodeSnippet code={sample} width='88%' height='20%' position='relative' left='0%' />
                    <p className='section2-info-titles'>Sample Request /faq-sync</p>
                    <CodeSnippet code={sample2} width='88%' height='20%' position='relative' left='0%' />
                </section>
                <section className='section3-right-cont'>
                    <h2 className='section2-info-titles'>Endpoints Available</h2>
                    <p className='section2-info' style={{marginBottom: '25px'}}>/faq-chat    /faq-sync</p>
                    <p className='section2-info-titles'>Sample Responses /faq-chat</p>
                    <CodeSnippet code={sample3} width='88%' height='20%' position='relative' left='0%' />
                    <p className='section2-info-titles'>Sample Responses /faq-sync</p>
                    <CodeSnippet code={sample4} width='88%' height='20%' position='relative' left='0%' />
                </section>
            </article>
            <DemoCard btn={'/faq-chat'} btn2={'/faq-sync'} endpoint={'faq-chat'} message={"I can't log into my account."}/>
        </div>
    )
}

export default FaqBot