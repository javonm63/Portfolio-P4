import '../styles/sideNav.css'

function SideNav2({page, setDisp}) {
    return (
        <nav className='sidenav2-main-container'>
            <button className='sideNav-titles' onClick={() => setDisp(true)}>{page}</button>
        </nav>
    )
}

export default SideNav2