import React, { useState, useEffect } from 'react';
import { playCard } from './deck';
import checkPoint from './checkWin.js';

function getCardInfo(className) {
  const cardInfo = className.slice(5, className.length);

  const index = cardInfo.indexOf('-');
  const suit = cardInfo.slice(0, index);
  const num = cardInfo.slice(index + 1, cardInfo.length);
  const card = { value: num, suit: suit };
  return card;
}

function indexToRowCol(cardIndex) {
  const iString = cardIndex.toString();
  let row = 0;
  let col = 0;

  if (iString.length === 1) {
    row = 0;
    col = parseInt(iString.charAt(0));
  } else {
    row = parseInt(iString.charAt(0));
    col = parseInt(iString.charAt(1));
  }

  return [row, col];
}

export default function Card(props) {
  const styleSelected = {};
  const [circCol, setCol] = useState('');
  const [taken, setTaken] = useState(false);
  const [pointPos, setPointPos] = useState([]);

  useEffect(() => {
    //loop through point pos, for every item in point pos
    //iterate through each position and change its classname using children[index]
    const board = document.getElementById('board-wrapper');

    for (let i = 0; i < pointPos.length; i++) {
      for (let z = 0; z < pointPos[i].length; z++) {
        const pos = pointPos[i][z];
        board.children[pos].children[1].className = 'circle point';
      }
    }
  }, [pointPos, props.circleClass]);

  function remCircle(e) {
    e.target.style.visibility = 'hidden';
    //reset circle classname to circle
    props.setCircleClass('circle');
    //remove red jack from hand and update deck
    let card = {};
    for (let i = 0; i < props.currPlayer.hand.length; i++) {
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

    const [row, col] = indexToRowCol(cardIndex);

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

    const board = props.simBoard.slice();

    if (props.currPlayer.p === 1) {
      const [newHand, newDeck] = playCard(card, props.player1.hand, props.deck);
      board[row][col] = 0;
      //update hand and deck

      props.updateDeck(newDeck);
      props.setCurrent(props.player2);

      //have to update checkpoint to return [points, completed], then store completed in a hook
      //add a useeffect to hook so that whenever its updated every card from completed has a changed class name
      //also need to update virtual board
      const [count, pointPositions] = checkPoint(board, row, col);
      const p = pointPos.slice();
      p.push(pointPositions);
      setPointPos(p);
      const points = props.player1.points + count;
      props.setPlayer1({ ...props.player1, hand: newHand, points: points });

      for (let i = 0; i < pointPositions.length; i++) {
        const [virtRow, virtCol] = indexToRowCol(pointPositions[i]);
        board[virtRow][virtCol] = 2;
      }

      props.setSimBoard(board);
    } else {
      const [newHand, newDeck] = playCard(card, props.player2.hand, props.deck);
      board[row][col] = 1;

      props.updateDeck(newDeck);
      props.setCurrent(props.player1);

      //have to update checkpoint to return [points, completed], then store completed in a hook
      //add a useeffect to hook so that whenever its updated every card from completed has a changed class name
      const [count, pointPositions] = checkPoint(board, row, col);
      const p = pointPos.slice();
      p.push(pointPositions);
      setPointPos(p);
      const points = props.player2.points + count;
      props.setPlayer2({ ...props.player2, hand: newHand, points: points });

      for (let i = 0; i < pointPositions.length; i++) {
        const [virtRow, virtCol] = indexToRowCol(pointPositions[i].toString());
        board[virtRow][virtCol] = 3;
      }

      props.setSimBoard(board);
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
