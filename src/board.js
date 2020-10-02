import React from 'react';
import Card from './card.js';

//Not happy with this file but cant think of another way to structure.
//Every card is in a unique position with no pattern
//So its impossible(? - at least for me) to find a non brute-force solution

export default function Board(props) {
  console.table(props.simBoard);
  return (
    <div id="board-wrapper">
      <Card className="card corner"></Card>
      <Card className="card spades-2" {...props}></Card>
      <Card className="card spades-3" {...props}></Card>
      <Card className="card spades-4" {...props}></Card>
      <Card className="card spades-5" {...props}></Card>
      <Card className="card spades-6" {...props}></Card>
      <Card className="card spades-7" {...props}></Card>
      <Card className="card spades-8" {...props}></Card>
      <Card className="card spades-9" {...props}></Card>
      <Card className="card corner"></Card>
      <Card className="card clubs-6" {...props}></Card>
      <Card className="card clubs-5" {...props}></Card>
      <Card className="card clubs-4" {...props}></Card>
      <Card className="card clubs-3" {...props}></Card>
      <Card className="card clubs-2" {...props}></Card>
      <Card className="card hearts-a" {...props}></Card>
      <Card className="card hearts-k" {...props}></Card>
      <Card className="card hearts-q" {...props}></Card>
      <Card className="card hearts-10" {...props}></Card>
      <Card className="card spades-10" {...props}></Card>
      <Card className="card clubs-7" {...props}></Card>
      <Card className="card spades-a" {...props}></Card>
      <Card className="card diamonds-2" {...props}></Card>
      <Card className="card diamonds-3" {...props}></Card>
      <Card className="card diamonds-4" {...props}></Card>
      <Card className="card diamonds-5" {...props}></Card>
      <Card className="card diamonds-6" {...props}></Card>
      <Card className="card diamonds-7" {...props}></Card>
      <Card className="card hearts-9" {...props}></Card>
      <Card className="card spades-q" {...props}></Card>
      <Card className="card clubs-8" {...props}></Card>
      <Card className="card spades-k" {...props}></Card>
      <Card className="card clubs-6" {...props}></Card>
      <Card className="card clubs-5" {...props}></Card>
      <Card className="card clubs-4" {...props}></Card>
      <Card className="card clubs-3" {...props}></Card>
      <Card className="card clubs-2" {...props}></Card>
      <Card className="card diamonds-8" {...props}></Card>
      <Card className="card hearts-8" {...props}></Card>
      <Card className="card spades-k" {...props}></Card>
      <Card className="card clubs-9" {...props}></Card>
      <Card className="card spades-q" {...props}></Card>
      <Card className="card clubs-7" {...props}></Card>
      <Card className="card hearts-6" {...props}></Card>
      <Card className="card hearts-5" {...props}></Card>
      <Card className="card hearts-4" {...props}></Card>
      <Card className="card hearts-a" {...props}></Card>
      <Card className="card diamonds-9" {...props}></Card>
      <Card className="card hearts-7" {...props}></Card>
      <Card className="card spades-a" {...props}></Card>
      <Card className="card clubs-10" {...props}></Card>
      <Card className="card spades-10" {...props}></Card>
      <Card className="card clubs-8" {...props}></Card>
      <Card className="card hearts-7" {...props}></Card>
      <Card className="card hearts-2" {...props}></Card>
      <Card className="card hearts-3" {...props}></Card>
      <Card className="card hearts-k" {...props}></Card>
      <Card className="card diamonds-10" {...props}></Card>
      <Card className="card hearts-6" {...props}></Card>
      <Card className="card diamonds-2" {...props}></Card>
      <Card className="card clubs-q" {...props}></Card>
      <Card className="card spades-9" {...props}></Card>
      <Card className="card clubs-9" {...props}></Card>
      <Card className="card hearts-8" {...props}></Card>
      <Card className="card hearts-9" {...props}></Card>
      <Card className="card hearts-10" {...props}></Card>
      <Card className="card hearts-q" {...props}></Card>
      <Card className="card diamonds-q" {...props}></Card>
      <Card className="card hearts-5" {...props}></Card>
      <Card className="card diamonds-3" {...props}></Card>
      <Card className="card clubs-k" {...props}></Card>
      <Card className="card spades-8" {...props}></Card>
      <Card className="card clubs-10" {...props}></Card>
      <Card className="card clubs-q" {...props}></Card>
      <Card className="card clubs-k" {...props}></Card>
      <Card className="card clubs-a" {...props}></Card>
      <Card className="card diamonds-a" {...props}></Card>
      <Card className="card diamonds-k" {...props}></Card>
      <Card className="card hearts-4" {...props}></Card>
      <Card className="card diamonds-4" {...props}></Card>
      <Card className="card clubs-a" {...props}></Card>
      <Card className="card spades-7" {...props}></Card>
      <Card className="card spades-6" {...props}></Card>
      <Card className="card spades-5" {...props}></Card>
      <Card className="card spades-4" {...props}></Card>
      <Card className="card spades-3" {...props}></Card>
      <Card className="card spades-2" {...props}></Card>
      <Card className="card hearts-2" {...props}></Card>
      <Card className="card hearts-3" {...props}></Card>
      <Card className="card diamonds-5" {...props}></Card>
      <Card className="card corner"></Card>
      <Card className="card diamonds-a" {...props}></Card>
      <Card className="card diamonds-k" {...props}></Card>
      <Card className="card diamonds-q" {...props}></Card>
      <Card className="card diamonds-10" {...props}></Card>
      <Card className="card diamonds-9" {...props}></Card>
      <Card className="card diamonds-8" {...props}></Card>
      <Card className="card diamonds-7" {...props}></Card>
      <Card className="card diamonds-6" {...props}></Card>
      <Card className="card corner"></Card>
    </div>
  );
}
