import { input } from '../input/day4.js';

const array = (input) => input.split('\n\n');
const [drawnNumbersString, ...boardStrings] = array(input);

const drawNumbers = drawnNumbersString.split(',').map((n) => Number(n));

const parseToNumbers = (board) => {
  const rows = []
  for (let row of board) {
    const newArray = row.trim().split(/\s+/);
    const numbers = newArray.map((n) => parseInt(n));
    rows.push(numbers);
  }
  return rows;
}

const boards = boardStrings
  .map((boardString) => boardString.split('\n'))
  .map((board) => parseToNumbers(board));

const markNumber = (board, number) => {
  for (let i = 0; i < board.length; i++)
    for (let j = 0; j < board[i].length; j++)
      if (board[i][j] === number)
        board[i][j] = 'X';
}

const hasWon = (board) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i].every((x) => x === 'X')) return true;
    if (board.map((row)=> row[i]).every((x) => x === 'X')) return true;
  }
  return false;
}

const getScore = (board, drawnNumber) => {
  let sum = 0;
  for (let i = 0; i < board.length; i++) 
    for (let j = 0; j < board[i].length; j++)
      if (board[i][j] !== 'X')
        sum += board[i][j]
  return sum * drawnNumber;
}

const checkWinners = (boards) => {
  let stillPlaying = [];
  let winners = [];
  for (let board of boards) {
    if (hasWon(board))
      winners.push(board)
    else
      stillPlaying.push(board);
  }
  return { winners, stillPlaying };
}

const play = (remainingBoards, drawNumbers) => {
  let scores = [];
  while (remainingBoards.length > 0) {
    const number = drawNumbers.shift();
    remainingBoards.forEach((board) => markNumber(board, number));
    const { winners, stillPlaying } = checkWinners(remainingBoards);
    winners.forEach((winner) => scores.push(getScore(winner, number)));
    remainingBoards = stillPlaying;
  }
  return scores;
}

export const solutionAB = () => {
  const scores = play(boards, drawNumbers);
  console.log('Scores:', scores);
  console.log('A: ', scores[0]);
  console.log('B:', scores.at(-1));
} 
