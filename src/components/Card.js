import React from 'react'
import './Card.css'
const Card = ({ card, handleChoiceChange, flipped, disabled }) => {
    const handleClick = () => {
        if (!disabled) {
            handleChoiceChange(card)
        }
    }
    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt={"card front"} />
                <img className="back" onClick={handleClick} src={'/images/back.png'} alt={"card back"} />
            </div>
        </div>
    )
}

export default Card
