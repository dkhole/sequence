import React, { useState } from 'react';
import { playCard } from './deck';

function getCardInfo(className) {
  const cardInfo = className.slice(5, className.length);

  const index = cardInfo.indexOf('-');
  const suit = cardInfo.slice(0, index);
  const num = cardInfo.slice(index + 1, cardInfo.length);
  const card = { value: num, suit: suit };
  return card;
}

export default function Card(props) {
  const styleSelected = {};
  const [circCol, setCol] = useState('');
  const [taken, setTaken] = useState(false);

  function remCircle(e) {
    e.target.style.visibility = 'hidden';
    //reset circle classname to circle
    props.setCircleClass('circle');
    //remove red jack from hand and update deck
    let card = {};
    for (let i = 0; i < props.currPlayer.hand.length; i++) {
      console.log(props.currPlayer.hand[i]);
      if (
        props.currPlayer.hand[i].value === 'j' &&
        (props.currPlayer.hand[i].suit === 'hearts' ||
          props.currPlayer.hand[i].suit === 'diamonds')
      ) {
        card = props.currPlayer.hand[i];
        break;
      }
    }

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
    setTaken(false);
  }

  function placeChip(e) {
    //place chip, play card and draw from deck. reset selected, change turn
    e.stopPropagation();
    if (taken) {
      return;
    }
    e.target.parentElement.children[1].style.visibility = 'visible';
    setCol(props.currPlayer.col);

    let card = {};
    let current = e.target.parentElement;
    let cardIndex = 0;

    while ((current = current.previousSibling) != null) {
      cardIndex++;
    }

    const iString = cardIndex.toString();
    const row = parseInt(iString.charAt(0));
    const col = parseInt(iString.charAt(1));

    const board = props.simBoard.slice();

    if (props.selected === 'all') {
      for (let i = 0; i < props.currPlayer.hand.length; i++) {
        if (
          props.currPlayer.hand[i].value === 'j' &&
          (props.currPlayer.hand[i].suit === 'spades' ||
            props.currPlayer.hand[i].suit === 'clubs')
        ) {
          card = props.currPlayer.hand[i];
          break;
        }
      }
    } else {
      card = getCardInfo(e.target.parentElement.className);
    }

    if (props.currPlayer.p === 1) {
      const [newHand, newDeck] = playCard(card, props.player1.hand, props.deck);
      board[row][col] = 0;
      //update hand and deck

      props.setSimBoard(board);
      props.updateDeck(newDeck);
      props.setPlayer1({ ...props.player1, hand: newHand });
      props.setCurrent(props.player2);
    } else {
      const [newHand, newDeck] = playCard(card, props.player2.hand, props.deck);
      board[row][col] = 1;

      props.setSimBoard(board);
      props.updateDeck(newDeck);
      props.setPlayer2({ ...props.player2, hand: newHand });
      props.setCurrent(props.player1);
    }
    setTaken(true);
    props.setSelected('');
  }

  if (
    props.selected === props.className ||
    (props.selected === 'all' && taken === false)
  ) {
    styleSelected.color = 'yellow';
    styleSelected.cursor = 'pointer';

    return (
      <div
        className={props.className}
        style={styleSelected}
        onClick={placeChip}
      >
        <div className="symbol">{props.children}</div>
        <div
          className={props.circleClass}
          style={{
            backgroundColor: circCol,
          }}
          onClick={remCircle}
        ></div>
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
      <div
        className={props.circleClass}
        style={{ backgroundColor: circCol }}
        onClick={remCircle}
      ></div>
    </div>
  );
}
