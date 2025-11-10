import { useEffect } from 'react'
import FaCard from '../components/faCard'
import Navbar from '../components/navbar'
import ScanCard from '../components/scanCard'
import SecondSide from '../components/secondSide'
import SideNav from '../components/sideNav'
import SideNavMob from '../components/sideNavMob'
import { dashboardHooks } from '../hooks/dashHooks'
import '../styles/dashboard.css'
import SalesChart from '../utils/chartjsUtil'
import { authUser } from '../utils/authUser'
import { LandingPageHooks } from '../hooks/landingHooks'

function Dashboard() {
    useEffect(() => {
        authUser()
    })
    const dashHooks = dashboardHooks()
    const page = dashHooks.page
    const setPage = dashHooks.setPage
    const widgetDisp = dashHooks.widgetDisp
    const setWidgetDisp = dashHooks.setWidgetDisp
    const scanDisp = dashHooks.scanDisp
    const setScanDisp = dashHooks.setScanDisp
    const navHook = dashboardHooks()
    const secSide = navHook.secSide
    const setSecSide = navHook.setSecSide

    const landingHooks = LandingPageHooks()
    const showLogOut = landingHooks.showLogOut
    const setShowLogOut = landingHooks.setShowLogOut
    // const showSide = dashHooks.showSide
    // const setShowSide = dashHooks.setShowSide
    // const sideMob = dashHooks.sideMob
    // const setSideMob = dashHooks.setSideMob
    const goToKeys = () => {
        window.location.href = '/keys'
    }
    const widgetAlert = () => {
        setWidgetDisp(true)
        setTimeout(() => {
            setWidgetDisp(false)
        }, 5000)
    }
    const showScan = () => [
        setScanDisp(true)
    ]

    return (
        <div className='dashboard-page-container'>
            <header>
                <Navbar showSignUp={showLogOut} setShowSignUp={setShowLogOut}/>
                <SideNav />
                <SideNavMob page={page} disp={secSide} setDisp={setSecSide}/>
                <SecondSide disp={secSide}/>
            </header>
            <main className='main-view-window'>
                <article className='mvw-top'>
                    <section className='api-usage-card'>
                        <p className='mnw-top-titles'>API Usage</p>
                        <SalesChart />
                    </section>
                    <section className='get-started-card'>
                        <p className='mnw-top-titles'>Get Started</p>
                        <p className='getStarted-info'>Here's a list of recommendations for using BizAI</p>
                        <ol className='getStarted-items-cont'>
                            <li className='getStarted-items'>- Generate an API key</li>
                            <li className='getStarted-items'>- Create UI components</li>
                            <li className='getStarted-items'>- Design API response flow</li>
                            <li className='getStarted-items'>- Setup caching/data storage</li>
                        </ol>
                    </section>
                </article>
                <h2 className='mvw-sub-title'>Feature Actions</h2>
                <article className='mvw-bottom'>
                    <FaCard faIconSrc={'/key-icon.png'} faIconAlt={'image of a key icon'} faCardAct={'Generate API Key'} something={goToKeys}/>
                    <FaCard faIconSrc={'/world-icon.png'} faIconAlt={'image of a website icon'} faCardAct={'Scan Your Website'} something={showScan}/>
                    <FaCard faIconSrc={'/widget-icon.png'} faIconAlt={'image of a add widget icon'} faCardAct={'Install Widget'} something={widgetAlert} widgetDisp={widgetDisp}/>
                </article>
            </main>
            <ScanCard disp={scanDisp} setDisp={setScanDisp}/>
        </div>
    )
}

export default Dashboard