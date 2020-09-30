import React, { useState } from 'react';
import * as Deck from './deck.js';

function PlayerHand(props) {
  for (let i = 0; i < 7; i++) {
    return <div>{props.player.hand[i].value}</div>;
  }
}

export default function PlayArea() {
  const [gameStart, setStart] = useState(false);
  const [player1Turn, setPlayer1Turn] = useState(false);
  const [player1, setPlayer1] = useState({ hand: [], p: 1 });
  const [player2, setPlayer2] = useState({ hand: [], p: 2 });

  function clickPlay() {
    setStart(true);
    setPlayer1Turn(true);

    const deck = Deck.getDeck();
    const shuffledDeck = Deck.shuffle(deck);

    setPlayer1({ ...player1, hand: Deck.deal(shuffledDeck) });
    setPlayer2({ ...player2, hand: Deck.deal(shuffledDeck) });
  }

  let player;
  if (player1Turn) {
    player = player1;
  } else {
    player = player2;
  }

  if (gameStart === true) {
    return (
      <div id="play-area">
        <div id="play-title">{`PLAYER ${player.p}`}</div>
        <PlayerHand player={player} />
      </div>
    );
  }

  return (
    <div id="play-area">
      <div id="play-title">SEQUENCE</div>
      <div id="play-description">
        Use your cards to place checkers onto the board.<br></br> Link 5
        checkers in a row to get a point, first to 2 points win.
      </div>
      <button id="play-now" onClick={clickPlay}>
        Play Now
      </button>
    </div>
  );
}
