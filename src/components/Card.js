import React from 'react'
import './Card.css'
const Card = ({ card, handleChoiceChange, flipped }) => {
    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt={"card front"} />
                <img className="back" onClick={() => handleChoiceChange(card)} src={'/images/back.png'} alt={"card back"} />
            </div>
        </div>
    )
}

export default Card
