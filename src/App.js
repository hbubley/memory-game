import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import { CARD_IMAGES } from './utils/constants';

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState()
  const [choiceTwo, setChoiceTwo] = useState()

  const shuffleCards = () => {
    const shuffledCards = [...CARD_IMAGES, ...CARD_IMAGES].sort(() => { return Math.random() - 0.5 }).map((card) => ({
      ...card, id: Math.random()
    }));
    setCards(shuffledCards);
    setTurns(0)
  }

  const handleChoiceChange = (card) => {
    console.log("🚀 ~ file: App.js ~ line 21 ~ handleChoiceChange ~ card", card)
    if (!choiceOne) {
      setChoiceOne(card);
    } else if (!choiceTwo) {
      setChoiceTwo(card);
    }
  }

  const resetTurn = () => {
    setTurns(prevTurns => prevTurns + 1);
    setChoiceOne(null);
    setChoiceTwo(null);
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn();
      } else {
        setTimeout(() =>
          resetTurn(), 1000
        )
}
    }
  }, [choiceOne, choiceTwo])
return (
  <div className="App">
    <h1>Match Game</h1>
    <button onClick={shuffleCards}>Begin Match</button>

    <div className='card-grid'>
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          handleChoiceChange={handleChoiceChange}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={choiceOne && choiceTwo}
        />
      ))}
    </div>
  </div>
);
}

export default App;
