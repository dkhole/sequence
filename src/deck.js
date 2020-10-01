export function getDeck() {
  const deck = [];
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  //prettier-ignore
  const values = ["a", "2", "3", "4", "5", "6", "7", "8" , "9", "10", "j", "q", "k"];

  //sequence uses 2 decks so do this twice
  for (let z = 0; z < 2; z++) {
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        //disregagrd 2j and 1 j for now just make reds vs blacks
        /*if (
          values[j] === 'j' &&
          (suits[i] === 'hearts' || suits[i] === 'diamonds')
        ) {
          const card = { value: '2j', suit: suits[i] };
          deck.push(card);
        } else if (
          values[j] === 'j' &&
          (suits[i] === 'clubs' || suits[i] === 'spades')
        ) {
          const card = { value: '1j', suit: suits[i] };
          deck.push(card);
        } else {*/
        const card = { value: values[j], suit: suits[i] };
        deck.push(card);
        //}
      }
    }
  }
  return deck;
}

export function shuffle(deck) {
  for (let i = 0; i < 1000; i++) {
    const pos1 = Math.floor(Math.random() * deck.length);
    const pos2 = Math.floor(Math.random() * deck.length);

    const temp = deck[pos1];
    deck[pos1] = deck[pos2];
    deck[pos2] = temp;
  }

  return deck;
}

export function deal(deck) {
  const playerHand = [];
  for (let i = 0; i < 7; i++) {
    playerHand[i] = deck.pop();
  }

  return playerHand;
}
