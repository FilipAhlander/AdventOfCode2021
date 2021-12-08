import { input } from '../input/day7.js';
const testData = `16,1,2,0,4,2,7,1,2,14`;

const testCrabs = testData.split(',').map(Number).sort((a, b) => a - b);
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
  const optimalPosition = Math.round(sum(crabs) / crabs.length);
  // const optimalPosition = 467; rounding error in my solution lol xD

  console.log(optimalPosition);
  const newFuelCost = sum(crabs.map((position) =>
    (Math.abs(position - optimalPosition) * (1 + Math.abs(position - optimalPosition))) / 2));
  console.log(newFuelCost);
}