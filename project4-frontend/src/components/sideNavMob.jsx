import '../styles/sideNav.css'

function SideNavMob({page, disp, setDisp}) {
    return (
        <nav className='sidenavMob-main-container' style={{display: disp ? 'none' : 'flex'}}>
            <button className='sideNav-titles' onClick={() => setDisp(true)}>{page}</button>
        </nav>
    )
}

export default SideNavMob