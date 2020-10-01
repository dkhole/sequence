import React from 'react';

export default function Card(props) {
  const styleSelected = {};

  function placeChip(e) {
    e.target.parentElement.children[1].style.visibility = 'visible';
    e.target.parentElement.children[1].style.backgroundColor = 'green';
    //reset selected, check for win and go to next player
    /*if (props.currPlayer.p === 1) {
      props.setCurrent(props.player2);
    } else {
      props.setCurrent(props.player1);
    }*/

    console.log(props.player1);

    //props.setSelected('');
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
        <div className="circle"></div>
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
      <div className="circle"></div>
    </div>
  );
}
