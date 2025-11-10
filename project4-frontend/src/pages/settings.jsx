import { useEffect } from 'react'
import Navbar from '../components/navbar'
import SecondSide from '../components/secondSide'
import SideNav2 from '../components/sideNav2'
import { dashboardHooks } from '../hooks/dashHooks'
import '../styles/settings.css'
import { authUser } from '../utils/authUser'

function Settings() {
    useEffect(() => {
        authUser()
    })
    const navHook = dashboardHooks()
    const secSide = navHook.secSide
    const setSecSide = navHook.setSecSide
    return (
        <div className='settings-page-container'>
            <header>
                <Navbar />
                <SideNav2 page={'Settings'} setDisp={setSecSide}/>
                <SecondSide disp={secSide}/>
            </header>
            <img className='back-to-home-icon' src='/backHome-icon.png' alt='image of home icon' onClick={() => window.location.href = '/dashboard'}></img>
            <main className='settings-main-cont'>
                <img className='settings-alert-icon' src='/warning-icon.png' alt='image of a warning icon'></img>
                <p className='settings-alert'>UNDER CONSTRUCTION</p>
            </main>
        </div>
    )
}

export default Settings