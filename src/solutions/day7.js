import { input } from '../input/day7.js';

const crabs = input.split(',').map(Number).sort((a, b) => a - b);
const median = crabs[crabs.length / 2];
const lowest = crabs[0];
const highest = crabs.at(-1);
const sum = (array) => array.reduce((a, b) => a + b, 0);

export const solutionA = () => {
  const fuelCost = sum(crabs.map((position) => Math.abs(position - median)));
  console.log(fuelCost);
}

export const solutionB = () => {
  console.log('B');
}