import React from 'react';

export default function Card(props) {
  return (
    <div className={props.className}>
      <div className="symbol">{props.children}</div>
      <div className="circle"></div>
    </div>
  );
}
