import Navbar from '../components/navbar'
import SecondSide from '../components/secondSide'
import SideNav2 from '../components/sideNav2'
import { dashboardHooks } from '../hooks/dashHooks'
import '../styles/docs.css'

function Docs() {
    const navHook = dashboardHooks()
    const secSide = navHook.secSide
    const setSecSide = navHook.setSecSide
    return (
        <div className='docs-page-container'>
            <header>
                <Navbar />
                <SideNav2 page={'Docs'} setDisp={setSecSide}/>
                <SecondSide disp={secSide}/>
            </header>
            <img className='back-to-home-icon' src='/backHome-icon.png' alt='image of home icon' onClick={() => window.location.href = '/dashboard'}></img>
            <section className='docs-section1-cont'>
                <h2 className='api-page-title'>BizAI API</h2>
                <p className='api-page-card1-info'>Allows online businesses and stores to automate the areas on their websites that matters the most to customers. These tools are powered by OpenAI and are designed specifically for their intended purposes, making sure each tool is smarter, faster and way more reliable than their generic non-ai counter-parts.</p>
            </section>
            <section className='docs-section2-cont'>
                <h2 className='api-page-title'>How To Use?</h2>
                <p className='api-page-card1-info'>Each API service has its own endpoints and setups/configs, but the general interactions with the API will be through POST requests in the format that the API is expecting to the desired endpoint. These tools only give back JSON responses so the UI design is completely up to the developer, so remember to have all the required UI elements for each API. Also an API key is required to use all of our APIs no exceptions and it is also required for each and every interaction with the API, so keep your API keys safe and create a system to keep them secure.</p>
            </section>
            <section className='docs-section3-cont'>
                <h2 className='api-page-title'>How It Works</h2>
                <p className='api-page-card1-info'>Our API takes your sent config data from your POST request and stores it for bot memory/setup, then on each user request made to the bot our API uses AI to not only automate and enhance responses, but also make sure the data is always available and accurate. This is to help lighten the site's maintenance for small business owners and website admins so they can focus on other aspects of their businesses.</p>
            </section>
        </div>
    )
}

export default Docs