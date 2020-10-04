import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './cards.css';
import Board from './board.js';
import checkPoint from './checkWin.js';

import PlayArea from './playArea.js';

const virtBoard = new Array(10);

for (let i = 0; i < 10; i++) {
  virtBoard[i] = new Array(10);
}

//set up corners

virtBoard[0][0] = -1;
virtBoard[0][9] = -1;
virtBoard[9][0] = -1;
virtBoard[9][9] = -1;

/*virtBoard[3][3] = 0;
virtBoard[2][2] = 0;

virtBoard[4][4] = 0;

virtBoard[2][4] = 0;
virtBoard[3][4] = 0;

virtBoard[3][5] = 0;
virtBoard[2][6] = 0;

virtBoard[5][5] = 0;
virtBoard[6][6] = 0;

virtBoard[5][4] = 0;
virtBoard[6][4] = 0;

virtBoard[5][3] = 0;
virtBoard[6][2] = 0;

virtBoard[4][2] = 0;
virtBoard[4][3] = 0;

virtBoard[4][5] = 0;
virtBoard[4][6] = 0;

console.log(checkPoint(virtBoard, 4, 4));*/

function Game() {
  const [simBoard, setSimBoard] = useState(virtBoard);
  const [selected, setSelected] = useState('');
  const [deck, updateDeck] = useState([]);
  const [player1, setPlayer1] = useState({
    hand: [],
    p: 1,
    col: '',
    points: 0,
  });
  const [player2, setPlayer2] = useState({
    hand: [],
    p: 2,
    col: '',
    points: 0,
  });
  const [currPlayer, setCurrent] = useState(player1);
  const [circleClass, setCircleClass] = useState('circle');

  if (player1.points >= 2) {
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
            circleClass={circleClass}
            setCircleClass={setCircleClass}
            simBoard={simBoard}
            setSimBoard={setSimBoard}
          />
        </div>
        <div id="play-area"> WINWINMOTHERFUCKER</div>
      </div>
    );
  } else if (player2.points >= 2) {
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
            circleClass={circleClass}
            setCircleClass={setCircleClass}
            simBoard={simBoard}
            setSimBoard={setSimBoard}
          />
        </div>
        <div id="play-area"> WINWINMOTHERFUCKER</div>
      </div>
    );
  }

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
          circleClass={circleClass}
          setCircleClass={setCircleClass}
          simBoard={simBoard}
          setSimBoard={setSimBoard}
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
        circleClass={circleClass}
        setCircleClass={setCircleClass}
      />
    </div>
  );
}

// ==========================================================

ReactDOM.render(<Game />, document.getElementById('root'));
