import Navbar from '../components/navbar'
import SideNav2 from '../components/sideNav2'
import { LandingPageHooks } from '../hooks/landingHooks'
import '../styles/landing-page.css'

function LandingPage() {
    const landingHooks= LandingPageHooks()
    const signUpTitle = landingHooks.signUpTitle
    const setSignUpTitle = landingHooks.setSignUpTitle
    const signUp = landingHooks.signUp
    const setSignUp = landingHooks.setSignUp
    const showSignUp = landingHooks.showSignUp
    const setShowSignUp = landingHooks.setShowSignUp

    const getApiKey = async (e) => {
        e.preventDefault()
        if (signUp === '') {
            setSignUpTitle('Enter a email')
            return
        }
        sessionStorage.setItem('myem', JSON.stringify({email: signUp}))
        window.location.href = '/dashboard'
    }

    return (
        <div className='landing-page-container'>
            <header>
                <Navbar setShowSignUp={setShowSignUp} />
            </header>
            <main className='landing-main-cont'>
                <article className='landing-section1-cont'>
                    <section className='landing-section1-left-cont'>
                        <h1 className='landing-title'>BizAI<br/>The super powerful online business AI tool you've been looking for.</h1>
                        <h2 className='landing-sub-title'>Automate and enhance your website's features so you or your admins don't have to.</h2>
                        <button className='landing-btn1' type='button' onClick={() => setShowSignUp(true)}>+ Generate API key</button>
                    </section>
                    <section className='landing-section1-right-cont'>
                        <div className='landing-section1-img'></div>
                    </section>
                </article>
                <section className='landing-section2-cont'>
                    <div className='landing-bottom-cont'>
                        <p className='landing-bottom-title'>Powered by</p>
                        <p className='landing-bottom-main-title'>OpenAI</p>
                    </div>
                </section>
            </main>
            <form onSubmit={getApiKey} className='signup-login-card' style={{display: showSignUp ? 'flex' : 'none'}}>
                <button className='signup-exit-button' type='button' onClick={() => setShowSignUp(false)}>X</button>
                <p className='signup-title'>{signUpTitle}</p>
                <p className='signup-sub-title'>To use our APIs you need an API key, to obtain one just enter your email then click the 'generate key' button below.</p>
                <input className='signup-input' type='email' value={signUp} onChange={(e) => setSignUp(e.target.value)} placeholder='Email' required></input>
                <button className='signup-button' type='submit'>Enter</button>
            </form>
        </div>
    )
}

export default LandingPage