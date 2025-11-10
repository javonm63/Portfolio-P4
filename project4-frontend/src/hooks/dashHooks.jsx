import { useState } from "react";

export function dashboardHooks() {
    const [page, setPage] = useState('DASHBOARD')
    const [showSide, setShowSide] = useState(true)
    const [sideMob, setSideMob] = useState(false)
    const [getKeyTitle, setGetKeyTitle] = useState(false)
    const [keyTitle, setKeyTitle] = useState(false)
    const [secSide, setSecSide] = useState(false)
    const [widgetDisp, setWidgetDisp] = useState(false)
    const [scanDisp, setScanDisp] = useState(false)
    const [apiKeyInfo, setApiKeyInfo] = useState([])
    const [keyTotal, setKeyTotal] = useState('0')
    const [keySuccess, setKeySuccess] = useState('0')
    const [keyFailed, setKeyFailed] = useState('0')
    const [keyUsed, setKeyUsed] = useState('100,000')
    const [keyUsedVal, setKeyUsedVal] = useState('')
    const [demoMessage, setDemoMessage] = useState('100')
    const [scanUrl, setScanUrl] = useState('')
    const [scanTitle, setScanTitle] = useState('')
    return {
        page, setPage,
        showSide, setShowSide,
        sideMob, setSideMob,
        getKeyTitle, setGetKeyTitle,
        keyTitle, setKeyTitle,
        apiKeyInfo, setApiKeyInfo,
        keyTotal, setKeyTotal,
        keySuccess, setKeySuccess,
        keyFailed, setKeyFailed,
        keyUsed, setKeyUsed,
        keyUsedVal, setKeyUsedVal,
        demoMessage, setDemoMessage,
        secSide, setSecSide,
        widgetDisp, setWidgetDisp,
        scanDisp, setScanDisp,
        scanUrl, setScanUrl,
        scanTitle, setScanTitle
    }
}