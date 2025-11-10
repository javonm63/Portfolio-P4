import '../styles/navbar.css'

function Navbar({setShowSignUp, showSignUp}) {
    const logOut = () => {
        sessionStorage.clear()
    }
    return (
        <nav className='navbar-main-container'>
            <section className='navbar-logo-cont'>
                <p className='logo'>Biz</p>
                <p className='logo2'>AI</p>
            </section>
            <section className='navbar-icons-cont'>
                <button className='navbar-buttons' type='button' onClick={() => window.location.href = '/docs'}>Docs</button>
                <button className='navbar-buttons' type='button' onClick={() => window.location.href = '/support'}>Support</button>
                <img className='nabvar-icons' src='/account-icon.webp' alt='image of a profile icon' onClick={() => setShowSignUp(true)}></img>
            </section>
            <form onSubmit={logOut} className='logOut-card' style={{display: showSignUp ? 'flex' : 'none'}}>
                <button className='signup-exit-button' type='button' onClick={() => setShowSignUp(false)}>X</button>
                <p className='signup-title'>LOGOUT?</p>
                <button className='signup-button' type='submit'>Exit</button>
            </form>
        </nav>
    )
}

export default Navbar