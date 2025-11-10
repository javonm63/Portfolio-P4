import '../styles/faCard.css'

function FaCard({faIconSrc, faIconAlt, faCardAct, something, widgetDisp}) {
    return (
        <div className='faCard-main-container'>
            <img className='faCard-icons' src={faIconSrc} alt={faIconAlt}></img>
            <button className='faCard-action-btn' type='button' onClick={something}>{faCardAct}</button>
            <p className='widget-info' style={{display: widgetDisp ? 'flex' : 'none'}}>Under Construction</p>
        </div>
    )
}

export default FaCard