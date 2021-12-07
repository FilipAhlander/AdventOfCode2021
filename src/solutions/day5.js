import { input } from '../input/day5.js';

const array = input.split('\n')
  .map((line) => {
    const [from, to] = line.split(' -> ').map((point) => {
      const [x, y] = point.split(',').map(Number);
      return { x, y };
    });
    return { from, to };
    
  });

export const solutionA = ( ) => {
  // Only horizontal and vertical lines
  const filteredArray = array.filter((line) => line.from.x === line.to.x || line.from.y === line.to.y);

  let count = 0;

  const coords = new Map();

  const addCoords = (key) => {
    let point = coords.get(key);
    if (!point)
      point = 0;
    point++;
    if (point === 2)
      count++;
    coords.set(key, point);
  }

  for (let row of filteredArray) {
    const isHorisontal = row.from.y === row.to.y;
    let currentPosition = { x: row.from.x, y: row.from.y };

    while (currentPosition.x !== row.to.x || currentPosition.y !== row.to.y) {
      addCoords(`${currentPosition.x},${currentPosition.y}`);
      if (isHorisontal) currentPosition.x += currentPosition.x < row.to.x ? 1 : -1;
      else currentPosition.y += currentPosition.y < row.to.y ? 1 : -1;
    }
    addCoords(`${currentPosition.x},${currentPosition.y}`);
  }
  console.log(count);
}

export const solutionB = ( ) => {

  let count = 0;

  const coords = new Map();

  const addCoords = (key) => {
    let point = coords.get(key);
    if (!point)
      point = 0;
    point++;
    if (point === 2)
      count++;
    coords.set(key, point);
  }

  for (let row of array) {
    const isHorisontal = row.from.y === row.to.y;
    const isVertical = row.from.x === row.to.x;
    let currentPosition = { x: row.from.x, y: row.from.y };

    while (currentPosition.x !== row.to.x || currentPosition.y !== row.to.y) {
      addCoords(`${currentPosition.x},${currentPosition.y}`);
      if (isHorisontal) currentPosition.x += currentPosition.x < row.to.x ? 1 : -1;
      else if (isVertical) currentPosition.y += currentPosition.y < row.to.y ? 1 : -1;
      else {
        currentPosition.x += currentPosition.x < row.to.x ? 1 : -1;
        currentPosition.y += currentPosition.y < row.to.y ? 1 : -1;
      }
    }
    addCoords(`${currentPosition.x},${currentPosition.y}`);
  }
  console.log(count);
}