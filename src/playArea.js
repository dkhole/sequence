import React, { useEffect, useState } from 'react';
import * as Deck from './deck.js';
import Card from './card.js';

function PlayerHand(props) {
  //put all symbols into key-value tree? maybe add through css
  //card spades-2
  return (
    <div className={props.handClass}>
      {props.currPlayer.hand.map((card, index) => {
        let cardClass = 'player-card ';
        cardClass = cardClass.concat(card.suit);
        cardClass = cardClass.concat('-');
        cardClass = cardClass.concat(card.value);

        return (
          <Card
            className={cardClass}
            key={index}
            clickCard={props.clickCard}
            circleClass={props.circleClass}
            setCircleClass={props.setCircleClass}
          />
        );
      })}
    </div>
  );
}

export default function PlayArea(props) {
  const [gameStart, setStart] = useState(false);
  const [isHidden, setHidden] = useState(true);
  const [handClass, setHandClass] = useState('player-hand');

  function clickPlay(e) {
    setStart(true);

    const newDeck = Deck.getDeck();
    const shuffledDeck = Deck.shuffle(newDeck);
    //const player1Hand = Deck.deal(shuffledDeck);
    //const player2Hand = Deck.deal(shuffledDeck);

    const player1Hand = [
      { value: 'j', suit: 'spades' },
      { value: 'j', suit: 'spades' },
      { value: 'j', suit: 'spades' },
      { value: 'j', suit: 'hearts' },
      { value: '9', suit: 'diamonds' },
      { value: '8', suit: 'clubs' },
      { value: '7', suit: 'spades' },
    ];
    const player2Hand = [
      { value: 'j', suit: 'spades' },
      { value: 'j', suit: 'spades' },
      { value: 'j', suit: 'spades' },
      { value: 'j', suit: 'hearts' },
      { value: '8', suit: 'hearts' },
      { value: 'j', suit: 'spades' },
      { value: 'j', suit: 'spades' },
    ];

    //get input colors
    const p1Col = e.target.parentElement.children[2].value;
    const p2Col = e.target.parentElement.children[3].value;

    props.setPlayer1({ ...props.player1, hand: player1Hand, col: p1Col });
    props.setPlayer2({ ...props.player2, hand: player2Hand, col: p2Col });
    props.updateDeck(shuffledDeck);
    props.setCurrent({ hand: player1Hand, p: 1, col: p1Col });
  }

  function clickCard(e) {
    const name = 'card ';
    const symbol = e.target.parentElement.className.slice(
      12,
      e.target.parentElement.className.length
    );

    props.setCircleClass('circle');
    //if card name is jack add event listener to chips? removal.
    if (
      symbol.charAt(symbol.length - 1) === 'j' &&
      (symbol.includes('diamonds') || symbol.includes('hearts'))
    ) {
      alert('Select a chip to remove or choose another card');
      props.setCircleClass('circle-rem');
    }

    if (
      symbol.charAt(symbol.length - 1) === 'j' &&
      (symbol.includes('spades') || symbol.includes('clubs'))
    ) {
      alert('Place a chip wherever you please');
      props.setSelected('all');
    } else {
      const cardName = name.concat(symbol);
      props.setSelected(cardName);
    }
  }

  /*function changeCol(e) {
    const color = e.target.value;

    if (props.currPlayer.p === 1) {
      props.setPlayer1({ ...props.player1, col: color });
    } else {
      props.setPlayer2({ ...props.player1, col: color });
    }

    props.setCurrent({ ...props.currPlayer, col: color });
  }*/

  function toggleHand() {
    if (isHidden) {
      setHandClass('player-hand show');
      setHidden(false);
    } else {
      setHandClass('player-hand');
      setHidden(true);
    }
  }

  useEffect(() => {
    setHandClass('player-hand');
    setHidden(true);
  }, [props.currPlayer]);

  if (gameStart === true) {
    return (
      <div id="play-area">
        <div id="play-title">{`PLAYER ${props.currPlayer.p}`}</div>
        <div id="deck-count">{`Remaining in deck: ${props.deck.length}`}</div>
        <div id="p1-points">P1: {props.player1.points}</div>
        <div id="p2-points">P2: {props.player2.points}</div>
        <PlayerHand
          handClass={handClass}
          currPlayer={props.currPlayer}
          clickCard={clickCard}
          circleClass={props.circleClass}
          setCircleClass={props.setCircleClass}
        />
        <button id="toggle-hand" onClick={toggleHand}>
          Show/Hide Hand
        </button>
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
      <input type="color" id="p1-col" defaultValue="#00ff1e"></input>
      <input type="color" id="p2-col" defaultValue="#FF00D7"></input>
      <button id="play-now" onClick={clickPlay}>
        Play Now
      </button>
    </div>
  );
}
