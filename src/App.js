import { useState } from 'react';
import './App.css';
import { CARD_IMAGES } from './utils/constants';

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...CARD_IMAGES, ...CARD_IMAGES].sort(() => { return Math.random() - 0.5 }).map((card) => ({
      ...card, id: Math.random()
    }));
    setCards(shuffledCards);
    setTurns(0)
  }

  return (
    <div className="App">
      <h1>Match Game</h1>
      <button onClick={shuffleCards}>Begin Match</button>

      <div className='card-grid'>
        {cards.map(card => (
          <div className="card">
            <img className="front" src={card.src} alt={"card front"} />
            <img className="back" src={'/images/back.png'} alt={"card back"} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
