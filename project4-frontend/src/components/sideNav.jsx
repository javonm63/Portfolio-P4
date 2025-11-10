import '../styles/sideNav.css'

function SideNav() {
    return (
        <nav className='sidenav-main-container'>
            <button className='sideNav-titles' onClick={() => window.location.href = '/dashboard'}>DASHBOARD</button>
            <button className='sideNav-titles' onClick={() => window.location.href = '/keys'}>API KEYS</button>
            <button className='sideNav-titles' onClick={() => window.location.href = '/helpbot'}>HELPBOT</button>
            <button className='sideNav-titles' onClick={() => window.location.href = '/chatbot'}>CHATBOT</button>
            <button className='sideNav-titles' onClick={() => window.location.href = '/faq'}>FAQBOT</button>
            <button className='sideNav-titles' onClick={() => window.location.href = '/openhrs'}>OPENHRS</button>
            <button className='sideNav-titles' onClick={() => window.location.href = '/finder'}>FINDER</button>
            <button className='sideNav-titles' onClick={() => window.location.href = '/settings'}>SETTINGS</button>
        </nav>
    )
}

export default SideNav