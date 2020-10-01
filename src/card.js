import React, { useState } from 'react';
import { playCard } from './deck';

export default function Card(props) {
  const styleSelected = {};
  const [circCol, setCol] = useState('');

  function placeChip(e) {
    //place chip, play card and draw from deck. reset selected, change turn
    e.target.parentElement.children[1].style.visibility = 'visible';
    setCol(props.currPlayer.col);

    const cardInfo = e.target.parentElement.className.slice(
      5,
      e.target.parentElement.className.length
    );

    const index = cardInfo.indexOf('-');
    const suit = cardInfo.slice(0, index);
    const num = cardInfo.slice(index + 1, cardInfo.length);
    console.log(cardInfo);
    console.log(suit);
    console.log(num);

    const card = { value: num, suit: suit };

    if (props.currPlayer.p === 1) {
      const [newHand, newDeck] = playCard(card, props.player1.hand, props.deck);
      //update hand and deck
      props.updateDeck(newDeck);
      props.setPlayer1({ ...props.player1, hand: newHand });
      props.setCurrent(props.player2);
    } else {
      const [newHand, newDeck] = playCard(card, props.player2.hand, props.deck);
      props.updateDeck(newDeck);
      props.setPlayer2({ ...props.player2, hand: newHand });
      props.setCurrent(props.player1);
    }

    props.setSelected('');
    console.log(props.deck.length);
  }

  if (props.selected === props.className) {
    styleSelected.color = 'yellow';
    styleSelected.cursor = 'pointer';
    return (
      <div
        className={props.className}
        style={styleSelected}
        onClick={placeChip}
      >
        <div className="symbol">{props.children}</div>
        <div className="circle" style={{ backgroundColor: circCol }}></div>
      </div>
    );
  }

  return (
    <div
      className={props.className}
      style={styleSelected}
      onClick={props.clickCard}
    >
      <div className="symbol">{props.children}</div>
      <div className="circle" style={{ backgroundColor: circCol }}></div>
    </div>
  );
}
