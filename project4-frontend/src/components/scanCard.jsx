import { dashboardHooks } from '../hooks/dashHooks'
import '../styles/scanCard.css'
import CodeSnippet from '../utils/snippets'

function ScanCard({disp, setDisp}) {
    const scanHooks = dashboardHooks()
    const scanUrl = scanHooks.scanUrl
    const setScanUrl = scanHooks.setScanUrl
    const scanTitle = scanHooks.scanTitle
    const setScanTitle = scanHooks.setScanTitle

    const sendWebsite = async (e) => {
        e.preventDefault()
        if (scanUrl === '') {
            setScanTitle('Website URL Requried.')
            setTimeout(() => {
                setScanTitle('Scan Your Website')
            }, 4000)
        }
        try {
            const req = await fetch('http://localhost:5001/scan/website', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({websiteUrl: String(scanUrl)}),
                credentials: 'include'
            })

            if (!req.ok) {
                const error = await req.json()
                console.log(error)
            } else {
                const data = await req.json()
                console.log(data)
                setScanTitle(JSON.stringify(data.schema, null, 2))
            }
        } catch (err) {
            console.log(err)
        }
    }

    const closePopUp = () => {
        setDisp(false)
    }
    return (
        <form onSubmit={sendWebsite} className='scanCard-main-container' style={{display: disp ? 'flex' : 'none'}}>
            <button className='scanCard-exit-button' type='button' onClick={closePopUp}>X</button>
            <p className='scanCard-title'>Scan Your Website</p>
            <p className='scanCard-info'>This feature is for automating website schemas for the HelpBot API, how it works is pretty simple you enter the url for the website that you want to use the HelpBot on then click 'send website'. that's it!</p>
            <p className='scanCard-warning'>*Copy the schema from the snippet display below for your helpBot API configuration, also some websites might not generate an ideal schema so make any necessary revisions or make schema manually. visit <a href='/helpbot'>HelpBot </a>for manual schema template.*</p>
            <input className='scanCard-input' type='text' placeholder='enter website url' value={scanUrl} onChange={(e) => setScanUrl(e.target.value)} required></input>
            <button className='scanCard-submit-btn' type='submit'>send website</button>
            <CodeSnippet code={scanTitle} width='88%' height='50%' position='relative' left='0%' />
        </form>
    )
}

export default ScanCard