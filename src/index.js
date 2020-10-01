import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './cards.css';
import Board from './board.js';

import PlayArea from './playArea.js';

function Game() {
  const [selected, setSelected] = useState('');
  const [deck, updateDeck] = useState([]);
  const [player1, setPlayer1] = useState({
    hand: [],
    p: 1,
    col: '',
  });
  const [player2, setPlayer2] = useState({
    hand: [],
    p: 2,
    col: '',
  });
  const [currPlayer, setCurrent] = useState(player1);

  return (
    <div id="game-wrap">
      <div id="board-area">
        <Board
          selected={selected}
          setSelected={setSelected}
          setCurrent={setCurrent}
          currPlayer={currPlayer}
          setPlayer1={setPlayer1}
          player1={player1}
          setPlayer2={setPlayer2}
          player2={player2}
          deck={deck}
          updateDeck={updateDeck}
        />
      </div>
      <PlayArea
        setSelected={setSelected}
        setCurrent={setCurrent}
        currPlayer={currPlayer}
        player1={player1}
        setPlayer1={setPlayer1}
        player2={player2}
        setPlayer2={setPlayer2}
        deck={deck}
        updateDeck={updateDeck}
      />
    </div>
  );
}

// ==========================================================

ReactDOM.render(<Game />, document.getElementById('root'));
