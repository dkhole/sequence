import React, { useState } from 'react';
import * as Deck from './deck.js';
import Card from './card.js';

function PlayerHand(props) {
  //put all symbols into key-value tree? maybe add through css
  //card spades-2
  return (
    <div id="player-hand">
      {props.currPlayer.hand.map((card, index) => {
        let cardClass = 'player-card ';
        cardClass = cardClass.concat(card.suit);
        cardClass = cardClass.concat('-');
        cardClass = cardClass.concat(card.value);

        return (
          <Card className={cardClass} key={index} clickCard={props.clickCard} />
        );
      })}
    </div>
  );
}

export default function PlayArea(props) {
  const [gameStart, setStart] = useState(false);

  function clickPlay() {
    setStart(true);

    const deck = Deck.getDeck();
    const shuffledDeck = Deck.shuffle(deck);
    const player1Hand = Deck.deal(shuffledDeck);
    const player2Hand = Deck.deal(shuffledDeck);

    props.setPlayer1({ ...props.player1, hand: player1Hand });
    props.setPlayer2({ ...props.player2, hand: player2Hand });
    props.setCurrent({ hand: player1Hand, p: 1 });
  }

  function clickCard(e) {
    const name = 'card ';
    const symbol = e.target.parentElement.className.slice(
      12,
      e.target.parentElement.className.length
    );
    const cardName = name.concat(symbol);
    props.setSelected(cardName);
  }

  if (gameStart === true) {
    console.log(props.currPlayer);
    return (
      <div id="play-area">
        <div id="play-title">{`PLAYER ${props.currPlayer.p}`}</div>
        <PlayerHand currPlayer={props.currPlayer} clickCard={clickCard} />
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
