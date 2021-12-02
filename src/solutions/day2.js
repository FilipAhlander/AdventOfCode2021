import { input } from '../input/day2.js';

const array = (input) => input.split('\n');
const arrayOfInstructions = array(input);

export const solutionA = () => {
let [x,y] = [0,0];
const readInstruction = (row) => {
  const [instruction, n] = row.split(' ');
  switch (instruction) {
    case 'forward':
      x += Number(n);
      break;
    case 'up':
      y += Number(n);
      break;
    case 'down':
      y -= Number(n);
      break;
    default:
      break;
  }
}

  for (let i = 0; i<arrayOfInstructions.length; i++) {
    readInstruction(arrayOfInstructions[i]);
  }
  const depth = 0-y
  console.log('Forward: ', x, ' Depth: ', depth);
  const answer = depth * x;
  console.log('Answer: ', answer);
}

export const solutionB = () => {

  let [forward, depth, aim] = [0,0,0];
  const readInstruction = (row) => {
    const [instruction, n] = row.split(' ');
    switch (instruction) {
      case 'forward':
        forward += Number(n);
        depth += aim * Number(n);
        break;
      case 'up':
        aim -= Number(n);
        break;
      case 'down':
        aim += Number(n);
        break;
      default:
        break;
    }
  }

  for (let i = 0; i<arrayOfInstructions.length; i++) {
    readInstruction(arrayOfInstructions[i]);
  }
  const answer = depth * forward;
  console.log(answer);
}