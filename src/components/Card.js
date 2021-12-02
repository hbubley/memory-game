import React from 'react'
import './Card.css'
const Card = ({ card, handleChoiceChange, choiceOne, choiceTwo }) => {
    return (
        <div className="card">
            {card.id === choiceOne?.id || card.id === choiceTwo?.id || card.matched
                ? <img className="front" src={card.src} alt={"card front"} />
                : <img className="back" onClick={() => handleChoiceChange(card)} src={'/images/back.png'} alt={"card back"} />
            }
        </div>
    )
}

export default Card
