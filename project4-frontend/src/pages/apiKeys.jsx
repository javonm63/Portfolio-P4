import '../styles/apiKeys.css'
import Navbar from '../components/navbar'
import ProgressBar from '../utils/progressBar'
import SideNav2 from '../components/sideNav2'
import { dashboardHooks } from '../hooks/dashHooks'
import { useEffect } from 'react'
import SecondSide from '../components/secondSide'
import Chart from '../components/chart'
import { authUser } from '../utils/authUser'

function ApiKey() {
    const keyhook = dashboardHooks()
    const getKeyTitle = keyhook.getKeyTitle
    const setGetKeyTitle = keyhook.setGetKeyTitle
    const keyTitle = keyhook.keyTitle
    const setKeyTitle = keyhook.setKeyTitle
    const apiKeyInfo = keyhook.apiKeyInfo
    const setApiKeyInfo = keyhook.setApiKeyInfo
    const keyTotal = keyhook.keyTotal
    const setKeyTotal = keyhook.setKeyTotal
    const keySuccess = keyhook.keySuccess
    const setKeySuccess = keyhook.setKeySuccess
    const keyFailed = keyhook.keyFailed
    const setKeyFailed = keyhook.setKeyFailed
    const keyUsed = keyhook.keyUsed
    const setKeyUsed = keyhook.setKeyUsed
    const keyUsedVal = keyhook.keyUsedVal
    const setKeyUsedVal = keyhook.setKeyUsedVal
    const secSide = keyhook.secSide
    const setSecSide = keyhook.setSecSide

    useEffect(() => {
        authUser()
        const load = async () => {
            const data = JSON.parse(localStorage.getItem('keyInfo'))
            const email = JSON.parse(sessionStorage.getItem('myem')).email

            if (!data) {
                return
            }
            setApiKeyInfo(data.key)
            try {
                const req = await fetch('https://portfolio-p4-backend.onrender.com/auth/quota', {
                    method: 'GET',
                    headers: {'Authorization': `Email ${email}`, 'Content-Type': 'application/json'},
                    credentials: 'include'
                })
                if (!req.ok) {
                    const error = await req.json()
                    console.log(error)
                } else {
                    const data = await req.json()
                    const quotaInfo = data.quota
                    setKeyTotal(quotaInfo.total)
                    setKeySuccess(quotaInfo.success)
                    setKeyFailed(quotaInfo.failed)
                    setKeyUsed(quotaInfo.used)
                    setKeyUsedVal(quotaInfo.usedval)
                    console.log(quotaInfo)
                }
            } catch (err) {
                console.log(err)
            }
        }
        load()
    }, [])

    const getApiKey = async (e) => {
        const email = JSON.parse(sessionStorage.getItem('myem')).email
        const req = await fetch('https://portfolio-p4-backend.onrender.com/auth/generate', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email}),
            credentials: 'include'
        })
        if (!req.ok) {
            const error = await req.json()
            console.log(error)
            // const err = error.err.constraint
            // if (err === 'users_pkey') {
            //     setSignUpTitle('')
            // }
        } else {
            const data = await req.json()
            console.log(data)
            if (data.message === 'API key created successfully') {
                const date = Date()
                const alias = `bizAI key ${Math.floor(Math.random() * 3000)}`
                const key = data.user.apikey
                const keyInfo = {
                    alias: alias, key: key, date: date, email: email, status: 'Active'
                }
                setApiKeyInfo((prev) => [...prev, keyInfo])
                localStorage.setItem('keyInfo', JSON.stringify({key: apiKeyInfo}) )
            } else {
                setKeyTitle(data.message)
                setGetKeyTitle(true)
            }
        }
    }
    return (
        <div className='apikey-page-container'>
            <header>
                <Navbar />
                <SideNav2 page={'API Keys'} setDisp={setSecSide}/>
                <SecondSide disp={secSide}/>
            </header>
            <h1 className='apikey-page-title'>API Keys</h1>
            <article className='apikey-section1-cont'>
                <section className='apikey-card1-top'>
                    <p className='get-key-info-mob'>Manage and secure your API keys.<br/>Treat them like passwords.</p>
                    <p className='get-key-info'>Manage and secure your API keys. Treat them like passwords.</p>
                    <p className='get-key-alert' style={{display: getKeyTitle ? 'flex' : 'none'}}>{keyTitle}</p>
                    <button className='get-key-button' type='button' onClick={getApiKey}>+ Generate New Key</button>
                </section>
                <section className='apikey-card1-mid'>
                    <table className='apikey-stats-table'>
                        <thead>
                            <tr>
                                <th className='apikey-table-titles'>API Alias</th>
                                <th className='apikey-table-titles'>API Key</th>
                                <th className='apikey-table-titles'>Created</th>
                                <th className='apikey-table-titles'>Created By</th>
                                <th className='apikey-table-titles'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {apiKeyInfo && apiKeyInfo.map((info, i) => (
                                <tr key={i}>
                                    <td className='apikey-table-data'>{info.alias}</td>
                                    <td className='apikey-table-data'>{info.key}</td>
                                    <td className='apikey-table-data'>{info.date}</td>
                                    <td className='apikey-table-data'>{info.email}</td>
                                    <td className='apikey-table-data'>{info.status}</td>
                                </tr> 
                            ))}
                        </tbody>
                    </table>
                </section>
                <section className='apikey-card1-bot'>
                    <img className='apikey-warning-icon' src='/warning-icon.png' alt='image of a warning icon'></img>
                    <p className='apikey-warning'>Write them down! -- this display will refresh.</p>
                </section>
            </article>
            <article className='apikey-section2-cont'>
                <section className='usage-graph-cont'>
                    <p className='section2-titles'>API Usage</p>
                    <Chart />
                </section>
                <section className='usage-stats-cont'>
                    <section className='endpoint-stat-cont'>
                        <p className='section2-titles'>Endpoint Usage</p>
                        <div className='endpoint-usage-table'>
                            <p className='endpoint-table-titles'>Total</p>
                            <p className='endpoint-table-titles'>Most Used</p>
                            <p className='endpoint-table-titles'>Success</p>
                            <p className='endpoint-table-titles'>Failed</p>
                            <p className='endpoint-table-data'>{`${keyTotal}(7days)`}</p>
                            <p className='endpoint-table-data'>/chatbot</p>
                            <p className='endpoint-table-data'>{keySuccess}</p>
                            <p className='endpoint-table-data'>{keyFailed}</p>
                        </div>
                    </section>
                    <section className='quota-stat-cont'>
                        <p className='section2-titles'>Quota Usage</p>
                        <div className='quota-usage-table'>
                            <p className='endpoint-table-data'>Quota Left: {keyUsed} / 100,000</p>
                            <ProgressBar label="Left" value={keyUsedVal} color="#fbac0fff" />
                            <p className='endpoint-table-data'>Renews at: midnight</p>
                        </div>
                    </section>
                </section>
            </article>
            <article className='apikey-section3-cont'>
                <section className='apikey-reminders-cont'>
                    <section className='apikey-reminders-title-cont'>
                        <img className='reminders-title-icon' src='/lock-icon.png' alt='image of a lock icon'></img>
                        <p className='apikey-reminder-title'>Security Reminders</p>
                    </section>
                    <ol className='key-reminders-cont'>
                        <li className='key-reminders'>Do not expose API keys in frontend code.</li>
                        <li className='key-reminders'>Regenerate immedaiately if leaked.</li>
                        <li className='key-reminders'>Use separate keys for production and testing.</li>
                        <li className='key-reminders'>Manage and track API keys and usage frequently.</li>
                        <li className='key-reminders'>Never rely on just one API key, rotate them out.</li>
                    </ol>
                </section>
                <section className='apikey-additional-cont'>
                    <section className='apikey-reminders-title-cont'>
                        <img className='reminders-title-icon' src='/limit-icon.png' alt='image of a lock icon'></img>
                        <p className='apikey-reminder-title'>Quota Limit Tips</p>
                    </section>
                    <ol className='key-reminders-cont'>
                        <li className='key-reminders'>Cache API responses to avoid reaching max limit.</li>
                        <li className='key-reminders'>Set usage alerts to get updated when approaching limit.</li>
                        <li className='key-reminders'>Enforce rate limits to avoid quota drainage.</li>
                        <li className='key-reminders'>Revoke stale or suspicious keys to keep usage under control.</li>
                        <li className='key-reminders'>Use separate keys for each environment.</li>
                    </ol>
                </section>
            </article>
        </div>
    )
}

export default ApiKey