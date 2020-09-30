import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './board.js';

import PlayArea from './playArea.js';

function Game() {
  return (
    <div id="game-wrap">
      <div id="board-area">
        <Board />
      </div>
      <PlayArea />
    </div>
  );
}

// ==========================================================

ReactDOM.render(<Game />, document.getElementById('root'));
