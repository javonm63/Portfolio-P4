import Navbar from '../components/navbar'
import SecondSide from '../components/secondSide'
import SideNav2 from '../components/sideNav2'
import { dashboardHooks } from '../hooks/dashHooks'
import '../styles/support.css'

function Support() {
    const navHook = dashboardHooks()
    const secSide = navHook.secSide
    const setSecSide = navHook.setSecSide
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const formData = new FormData(e.target);

        try {
        const response = await fetch("https://formspree.io/f/xldaerlr", {
            method: "POST",
            body: formData,
            headers: {
            Accept: "application/json", 
            },
        });

        if (response.ok) {
            e.target.reset(); 
        } else {
            const data = await response.json();
            if (data.errors && data.errors.length > 0) {
            console.log(data.errors[0].message);
            } else {
            console.log("Something went wrong. Please try again.");
            }
        }
        } catch (err) {
        console.log("Network error. Please try again.");
        }
    };
    return (
        <div className='support-page-container'>
            <header>
                <Navbar />
                <SideNav2 page={'Support'} setDisp={setSecSide}/>
                <SecondSide disp={secSide}/>
            </header>
            <img className='back-to-home-icon' src='/backHome-icon.png' alt='image of home icon' onClick={() => window.location.href = '/dashboard'}></img>
            <main className='support-main-cont'>
                <section className='support-left-cont'>
                    <h2 className='support-avatar-speech'>Got a question or problem? <br/>contact us today.</h2>
                    <div className='support-avatar-cont'></div>
                </section>
                <form onSubmit={handleSubmit} className='support-right-cont'>
                    <h2 className='contact-us-title'>CONTACT US</h2>
                    <input className='contact-us-inputs' type='text' name='name' placeholder='Name' required></input>
                    <input className='contact-us-inputs' type='text' name='email' placeholder='Email' required></input>
                    <textarea className='contact-us-message-input' name='message' required></textarea>
                    <button className='contact-us-submit-btn' type='submit'>send</button>
                </form>
            </main>
        </div>
    )
}

export default Support