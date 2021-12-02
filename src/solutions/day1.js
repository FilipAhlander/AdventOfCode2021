import { input } from '../input/day1.js';

const arrayOfNumbers = (input) => input.split('\n').map((x) => Number(x));
const numbers = arrayOfNumbers(input);

export const solutionA = () => {
  let increased = 0;
  for (let i = 1; i<input.length; i++) {
    if (numbers[i] > numbers[i-1]) increased++;
  }
  console.log('solution day 1 a: ', increased);
}

export const solutionB = () => {
  let increased = 0;
  const sum = (n) => numbers[n] + numbers[n-1] + numbers[n-2];
  for (let i = 3; i<numbers.length; i++) {
    if (sum(i) > sum(i-1)) increased++;
  }
  console.log('solution day 1 b: ', increased);
}
