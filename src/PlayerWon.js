import React from 'react';

export default function PlayerWon(props) {
  return (
    <div id="play-area">
      <div class="play-title won">{`PLAYER ${props.winner.p} WINS`}</div>
      <div id="p1-points" style={{ color: props.player1.col }}>
        P1: {props.player1.points}
      </div>
      <div id="p2-points" style={{ color: props.player2.col }}>
        P2: {props.player2.points}
      </div>
      <div id="deck-count">{`Remaining in deck: ${props.deck.length}`}</div>
    </div>
  );
}
