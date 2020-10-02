//Need to update functions to include corner pieces

function checkCol(board, row, col, current) {
  let count = 1;

  for (let i = 1; i < 5; i++) {
    if (row + i <= 9) {
      if (board[row + i][col] === current) {
        count++;
      } else {
        break;
      }
    }
  }

  for (let i = 1; i < 5; i++) {
    if (row - i >= 0) {
      if (board[row - i][col] === current) {
        count++;
      } else {
        break;
      }
    }
  }

  if (count >= 5) {
    return 1;
  } else {
    return 0;
  }
}

function checkRow(board, row, col, current) {
  let count = 1;
  for (let i = 1; i < 5; i++) {
    if (col + i <= 9) {
      if (board[row][col + i] === current) {
        count++;
      } else {
        break;
      }
    }
  }

  for (let i = 1; i < 5; i++) {
    if (col - i >= 0) {
      if (board[row][col - i] === current) {
        count++;
      } else {
        break;
      }
    }
  }

  if (count >= 5) {
    return 1;
  } else {
    return 0;
  }
}

function checkDiagonalX(board, row, col, current) {
  let count = 1;
  //top right (-row, +col)
  for (let i = 1; i < 5; i++) {
    if (col + i <= 9 && row - i >= 0) {
      if (board[row - i][col + i] === current) {
        count++;
      } else {
        break;
      }
    }
  }

  //bottom left (+row, -col)
  for (let i = 1; i < 5; i++) {
    if (col - i >= 0 && row + i <= 9) {
      if (board[row + i][col - i] === current) {
        count++;
      } else {
        break;
      }
    }
  }

  if (count >= 5) {
    return 1;
  } else {
    return 0;
  }
}

function checkDiagonalY(board, row, col, current) {
  let count = 1;
  //top left (-row, -col)
  for (let i = 1; i < 5; i++) {
    if (col - i >= 0 && row - i >= 0) {
      if (board[row - i][col - i] === current) {
        count++;
      } else {
        break;
      }
    }
  }

  // bottom right (+row, +col)
  for (let i = 1; i < 5; i++) {
    if (col + i <= 9 && row + i <= 9) {
      if (board[row + i][col + i] === current) {
        count++;
      } else {
        break;
      }
    }
  }

  if (count >= 5) {
    return 1;
  } else {
    return 0;
  }
}

export default function checkPoint(board, row, col) {
  const current = board[row][col];
  //count is 1 as it includes placed checker
  let count = 0;
  //check col, row, diagonal
  console.table(board);

  //check col
  count = count + checkCol(board, row, col, current);

  //check row
  count = count + checkRow(board, row, col, current);

  //check diagonals
  count = count + checkDiagonalX(board, row, col, current);

  count = count + checkDiagonalY(board, row, col, current);

  return count;
}
