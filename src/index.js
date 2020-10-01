import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './cards.css';
import Board from './board.js';

import PlayArea from './playArea.js';

function Game() {
  const [selected, setSelected] = useState('');
  const [currPlayer, setCurrent] = useState(null);
  const [player1, setPlayer1] = useState({ hand: [], p: 1 });
  const [player2, setPlayer2] = useState({ hand: [], p: 2 });

  return (
    <div id="game-wrap">
      <div id="board-area">
        <Board selected={selected} />
      </div>
      <PlayArea
        setSelected={setSelected}
        setCurrent={setCurrent}
        currPlayer={currPlayer}
        player1={player1}
        setPlayer1={setPlayer1}
        player2={player2}
        setPlayer2={setPlayer2}
      />
    </div>
  );
}

// ==========================================================

ReactDOM.render(<Game />, document.getElementById('root'));
