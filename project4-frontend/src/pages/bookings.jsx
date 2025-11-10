import { useEffect } from 'react'
import Navbar from '../components/navbar'
import SideNav2 from '../components/sideNav2'
import { howToUseHooks } from '../hooks/apiHooks'
import '../styles/helpbot.css'
import { Authen, BestP, InterFlow, Message, Response1, Response2, SendPS, Session } from '../utils/page-schema'
import CodeSnippet from '../utils/snippets'
import { BestP5, ConfigFind, ConfigFind2, InterFlow5, Product, Response10, Response9 } from '../utils/page-schema2'
import DemoCard from '../components/demoCard'
import SecondSide from '../components/secondSide'
import { dashboardHooks } from '../hooks/dashHooks'
import { authUser } from '../utils/authUser'

function BookingsBot() {
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
            const schemaSample = ConfigFind2()
            const messageSample = Product()
            const resSample = Response10()
            const res2Sample = Response9()
            setSample(messageSample)
            setSample2(schemaSample)
            setSample3(resSample)
            setSample4(res2Sample)
        }
        setSampleSnippet()
    })

    const showSnippet = (e) => {
        if (e.target.value === 'Send Page Schema') {
            const code = ConfigFind2()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Send User Messages') {
            const code = Product()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Authentication') {
            const code = Authen()
            setSnipptTitle(`${e.target.value} Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Session Setup') {
            const code = ConfigFind()
            setSnipptTitle(`Catalog Format Example`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Interaction Flow') {
            const code = InterFlow5()
            setSnipptTitle(`${e.target.value}`)
            setSnippet(code)
            setShowSnip(true)
        } else if (e.target.value === 'Best Practices') {
            const code = BestP5()
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
                <SideNav2 page={'FinderBot'} setDisp={setSecSide}/>
                <SecondSide disp={secSide}/>
            </header>
            <h1 className='apikey-page-title'>FinderBot</h1>
            <article className='api-pages-container1'>
                <h2 className='api-page-title'>FinderBot API</h2>
                <p className='api-page-card1-info'>FinderBot is product finder tool for online and ecommerce stores, powered by AI it's designed to ensure customers find the products they want. Upgrade your store's user experience by having our AI bot handle the miscellaneous product matchings.</p>
            </article>
            <article className='api-pages-container2'>
                <div className='api-page-card2-left-cont'>
                    <h2 className='section2-titles'>Getting Started</h2>
                    <div className='section2-grids'>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>What You Provide</h3>
                            <p className='section2-info'>Product catalog so the AI have a database</p>
                            <p className='section2-info'>Inventory data for available products</p>
                            <p className='section2-info'>User messages about products</p>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>What FinderBot Provide</h3>
                            <p className='section2-info'>Helps understand user shopping intent</p>
                            <p className='section2-info'>Filters shopping catalog in real-time</p>
                            <p className='section2-info'>Converational guiding questions</p>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Authentication</h3>
                            <p className='section2-info'>All requests require your API key</p>
                            <button className='section2-info-btns' type='button' value='Authentication' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>FinderBot Config</h3>
                            <p className='section2-info'>A one-time setup for the FinderBot</p>
                            <p className='section2-info'>Only repeat if products change</p>
                            <button className='section2-info-btns' type='button' value='Session Setup' onClick={showSnippet}>view example</button>
                        </section>
                    </div>
                </div>
                <div className='api-page-card2-right-cont'>
                    <h2 className='section2-titles'>How To Use</h2>
                    <div className='section2-grids'>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Send Config</h3>
                            <p className='section2-info'>Setup a button to send config to the FinderBot</p>
                            <button className='section2-info-btns' type='button' value='Send Page Schema' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Send User Messages</h3>
                            <p className='section2-info'>Use the endpoint /finderBot to get product relate and accurate AI responses</p>
                            <button className='section2-info-btns' type='button' value='Send User Messages' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Interaction Flow</h3>
                            <p className='section2-info'>This is the recommended UI/UX & data flow for using FinderBot API</p>
                            <button className='section2-info-btns' type='button' value='Interaction Flow' onClick={showSnippet}>view example</button>
                        </section>
                        <section className='section2-info-conts'>
                            <h3 className='section2-info-titles'>Best Practices</h3>
                            <p className='section2-info'>The following is to ensure you get the most out of FinderBot AI</p>
                            <button className='section2-info-btns' type='button' value='Best Practices' onClick={showSnippet}>view example</button>
                        </section>
                    </div>
                    <aside className='snippet-container' style={{display: showSnip ? 'flex' : 'none'}}>
                        <button className='exit-button' type='button' onClick={closeSnippet}>X</button>
                        <p className='snippet-title'>{snippetTitle}</p>
                        <CodeSnippet code={snippet} width='90%'/>
                    </aside>
                </div>
            </article>
            <article className='api-pages-container3'>
                <section className='section3-left-cont'>
                    <h2 className='section2-info-titles'>Endpoints Available</h2>
                    <p className='section2-info' style={{marginBottom: '25px'}}>/finderBot    /finder-config</p>
                    <p className='section2-info-titles'>Sample Request /finderBot</p>
                    <CodeSnippet code={sample} width='88%' height='20%' position='relative' left='0%' />
                    <p className='section2-info-titles'>Sample Request /finder-config</p>
                    <CodeSnippet code={sample2} width='88%' height='20%' position='relative' left='0%' />
                </section>
                <section className='section3-right-cont'>
                    <h2 className='section2-info-titles'>Endpoints Available</h2>
                    <p className='section2-info' style={{marginBottom: '25px'}}>/finderBot    /finder-config</p>
                    <p className='section2-info-titles'>Sample Responses /finderBot</p>
                    <CodeSnippet code={sample3} width='88%' height='20%' position='relative' left='0%' />
                    <p className='section2-info-titles'>Sample Responses /finder-config</p>
                    <CodeSnippet code={sample4} width='88%' height='20%' position='relative' left='0%' />
                </section>
            </article>
            <DemoCard btn={'/finderBot'} btn2={'/finder-config'} endpoint={'finderBot'} message={"Looking for something comfortable for winter"}/>
        </div>
    )
}

export default BookingsBot