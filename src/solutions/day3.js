import { input } from '../input/day3.js';

const array = (input) => input.split('\n');
const arrayOfInstructions = array(input);

export const solutionA = () => {
let zerosPosition = [];
let onesPosition = []
for (let char of arrayOfInstructions[0]) {
  zerosPosition.push(0);
  onesPosition.push(0);
}

for (let row of arrayOfInstructions) {
  for (let i = 0; i<row.length; i++) {
    if (row[i] === '0') {
      zerosPosition[i]++;
    } else {
      onesPosition[i]++;
    }
  }
}
let gammeRate = '';
let epsiRate = ''
for (let j = 0; j<zerosPosition.length; j++) {
  if (zerosPosition[j] > onesPosition[j]) {
    gammeRate += '0';
    epsiRate += '1';
  }
  else {
    gammeRate += '1';
    epsiRate += '0';
  }
}
const gamma = parseInt(Number(gammeRate), 2);
const epsi = parseInt(Number(epsiRate), 2)
console.log('answer: ', gamma * epsi);
}

const zeros = (oxygenArray, n) => oxygenArray.filter((x) => x[n] === '0').length;
const ones = (oxygenArray, n) => oxygenArray.filter((x) => x[n] === '1').length;

export const solutionB = () => {
  let oxygenArray = [...arrayOfInstructions];
  let scrubberArray = [...arrayOfInstructions];
  for (let i = 0; i < oxygenArray[0].length; i++) {
    const zero = zeros(oxygenArray, i);
    const one = ones(oxygenArray, i);
    let filterChar = '';
    if (one >= zero) filterChar += 1;
    else filterChar += 0;
    oxygenArray = oxygenArray.filter((x) => x[i] === filterChar);
    if (oxygenArray.length === 1) break;
  }
  // console.log(oxygenArray);
  for (let i = 0; i < scrubberArray[0].length; i++) {
    const zero = zeros(scrubberArray, i);
    const one = ones(scrubberArray, i);
    let filterChar = '';
    if (zero <= one) filterChar += 0;
    else filterChar += 1;
    scrubberArray = scrubberArray.filter((x) => x[i] === filterChar);
    if (scrubberArray.length === 1) break;
  }
  const oxygen = parseInt(Number(oxygenArray), 2);
  const scrubber = parseInt(Number(scrubberArray), 2);
  const answer = oxygen * scrubber;
  console.log(answer);
}