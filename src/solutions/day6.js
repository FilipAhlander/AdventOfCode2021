import { input } from '../input/day6.js';

const fishes = input.split(',').map(Number);

export const solutionA = () => {
  const queue = Array(9).fill(0);
  for (const fish of fishes) {
    queue[fish]++;
  }
  for (let i = 0; i < 80; i++) {
    const currentFishes = queue.shift();
    queue.push(currentFishes);
    queue[6] += currentFishes;
  }
  let sum = 0;
  queue.forEach((n) => sum += n);
  console.log(sum);
}

export const solutionB = () => {
  const queue = Array(9).fill(0);
  for (const fish of fishes) {
    queue[fish]++;
  }
  for (let i = 0; i < 256; i++) {
    const currentFishes = queue.shift();
    queue.push(currentFishes);
    queue[6] += currentFishes;
  }
  let sum = 0;
  queue.forEach((n) => sum += n);
  console.log(sum);
}