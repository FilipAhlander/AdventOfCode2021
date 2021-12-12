import { input, testInput } from '../input/day9.js';

const data = (input) => input.split('\n').map((line) => line.split(''));

const isLowPoint = (current, up, down, left, right) => {
  return (
    (!up || current < up) &&
    (!down || current < down) &&
    (!left || current < left) &&
    (!right || current < right)
  )
}

export const solutionA = () => {
  let lowPointsSum = 0;
  const map = data(testInput);
  for (let i = 0; i < map.length; i++)
    for (let j = 0; j < map[0].length; j++) {
      const current = map[i][j];
      const up = i > 0 ? map[i-1][j] : null;
      const down = i < map.length-1 ? map[i+1][j] : null;
      const left = j > 0 ? map[i][j-1] : null;
      const right = j < map[i].length-1 ? map[i][j+1] : null;
      if (isLowPoint(current, up, down, left, right)) {
        console.log(current);
        const sum = 1 + current;
        lowPointsSum += sum;
      };
    }
  console.log(lowPointsSum);
}

const getLowPoints = (map) => {
  const lowPoints = [];
  for (let i = 0; i < map.length; i++)
    for (let j = 0; j < map[0].length; j++) {
      const current = map[i][j];
      const up = i > 0 ? map[i-1][j] : null;
      const down = i < map.length-1 ? map[i+1][j] : null;
      const left = j > 0 ? map[i][j-1] : null;
      const right = j < map[i].length-1 ? map[i][j+1] : null;
      if (isLowPoint(current, up, down, left, right)) {
        lowPoints.push({i,j});
      };
    }
    return lowPoints;
}

const replaceNines = (map) => {
  for (let i = 0; i < map.length; i++)
    for (let j = 0; j < map[0].length; j++)
      if (map[i][j] === '9') map[i][j] = -1;
}

const fillBasin = (i, j, map) => {
  if (map[i][j] === -1) return 0;
  map[i][j] = -1;

  let size = 1
  if (i - 1 >= 0) size += fillBasin(i - 1, j, map);
  if (i + 1 < map.length) size += fillBasin(i + 1, j, map);
  if (j - 1 >= 0) size += fillBasin(i, j - 1, map);
  if (j + 1 < map[0].length) size += fillBasin(i, j + 1, map);

  return size;
}

export const solutionB = () => {
  let map = data(input);
  const lowPoints = getLowPoints(map);
  replaceNines(map);
  const basins = [];
  lowPoints.forEach((x) => {
    const basin = fillBasin(x.i, x.j, map);
    basins.push(basin);
  })
  basins.sort((a, b) => b - a);
  console.log(basins[0] * basins[1] * basins [2]);
}