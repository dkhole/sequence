//Need to update functions to include corner pieces

function convertToPos(row, col) {
  const strRow = row.toString();
  const strCol = col.toString();

  const index = strRow.concat(strCol);
  return index;
}

function checkCol(board, row, col, current) {
  let count = 1;
  let complete = new Array(5);
  let index = 0;

  complete[index] = convertToPos(row, col);
  index++;

  for (let i = 1; i < 5; i++) {
    if (row + i <= 9) {
      if (board[row + i][col] === current) {
        complete[index] = convertToPos(row + i, col);
        index++;
        count++;
      } else {
        break;
      }
    }
  }

  for (let i = 1; i < 5; i++) {
    if (row - i >= 0) {
      if (board[row - i][col] === current) {
        complete[index] = convertToPos(row - i, col);
        index++;
        count++;
      } else {
        break;
      }
    }
  }

  if (count >= 5) {
    return [1, complete];
  } else {
    return [0, null];
  }
}

function checkRow(board, row, col, current) {
  let count = 1;
  let complete = new Array(5);
  let index = 0;

  complete[index] = convertToPos(row, col);
  index++;

  for (let i = 1; i < 5; i++) {
    if (col + i <= 9) {
      if (board[row][col + i] === current) {
        complete[index] = convertToPos(row, col + i);
        index++;
        count++;
      } else {
        break;
      }
    }
  }

  for (let i = 1; i < 5; i++) {
    if (col - i >= 0) {
      if (board[row][col - i] === current) {
        complete[index] = convertToPos(row, col - i);
        index++;
        count++;
      } else {
        break;
      }
    }
  }

  if (count >= 5) {
    return [1, complete];
  } else {
    return [0, null];
  }
}

function checkDiagonalX(board, row, col, current) {
  let count = 1;
  let complete = new Array(5);
  let index = 0;

  complete[index] = convertToPos(row, col);
  index++;
  //top right (-row, +col)
  for (let i = 1; i < 5; i++) {
    if (col + i <= 9 && row - i >= 0) {
      if (board[row - i][col + i] === current) {
        complete[index] = convertToPos(row - i, col + i);
        index++;
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
        complete[index] = convertToPos(row + i, col - i);
        index++;
        count++;
      } else {
        break;
      }
    }
  }

  if (count >= 5) {
    return [1, complete];
  } else {
    return [0, null];
  }
}

function checkDiagonalY(board, row, col, current) {
  let count = 1;
  let complete = new Array(5);
  let index = 0;

  complete[index] = convertToPos(row, col);
  index++;

  //top left (-row, -col)
  for (let i = 1; i < 5; i++) {
    if (col - i >= 0 && row - i >= 0) {
      if (board[row - i][col - i] === current) {
        complete[index] = convertToPos(row - i, col - i);
        index++;
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
        complete[index] = convertToPos(row + i, col + i);
        index++;
        count++;
      } else {
        break;
      }
    }
  }

  if (count >= 5) {
    return [1, complete];
  } else {
    return [0, null];
  }
}

export default function checkPoint(board, row, col) {
  const current = board[row][col];
  let pointPositions = [];
  //count is 1 as it includes placed checker
  let count = 0;
  //check col, row, diagonal
  console.table(board);

  //check col
  const [colResult, completeCol] = checkCol(board, row, col, current);

  count = count + colResult;

  if (completeCol) {
    pointPositions = completeCol;
  }

  //check row
  const [rowResult, completeRow] = checkRow(board, row, col, current);

  count = count + rowResult;

  if (completeRow) {
    pointPositions = pointPositions.concat(completeRow);
  }

  //check diagonals
  const [diagXResult, completeDiagX] = checkDiagonalX(board, row, col, current);

  count = count + diagXResult;

  if (completeDiagX) {
    pointPositions = pointPositions.concat(completeDiagX);
  }

  const [diagYResult, completeDiagY] = checkDiagonalY(board, row, col, current);

  count = count + diagYResult;

  if (completeDiagY) {
    pointPositions = pointPositions.concat(completeDiagY);
  }

  console.log(pointPositions);

  return [count, pointPositions];
}
