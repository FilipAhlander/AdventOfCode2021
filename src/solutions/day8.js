import { input, testInput } from '../input/day8.js';

const lines = (data) => data
  .split('\n')
  .map(line => {
    const [signalPattern, outputValue] = line
      .split(' | ')
      .map((val) => val
      .split(' ')
      .map((str) => {
        const letters = [...str];
        letters.sort();
        return letters.join('');
      }));
    return { signalPattern, outputValue };
  });

const includes = (word, match) => {
  const set = new Set([...word]);
  return [...match].every((char) => set.has(char));
}

export const solutionA = () => {
  const data = lines(input);
  let count = 0;
  for (let line of data) {
    const matches = line.outputValue.filter((x) => [2,3,4,7].includes(x.length))
    count += matches.length;
  }
  console.log(count);
}

export const solutionB = () => {
  let amount = 0;
  const data = lines(input);

  for (let line of data) {
  const matches = {
    1: line.signalPattern.find((word) => word.length === 2),
    4: line.signalPattern.find((word) => word.length === 4),
    7: line.signalPattern.find((word) => word.length === 3),
    8: line.signalPattern.find((word) => word.length === 7)
  };

  // Length 6: 6, 9, 0
  matches[6] = line.signalPattern.find((word) => word.length === 6 && !includes(word, matches[1]));
  matches[9] = line.signalPattern.find((word) => word.length === 6 && includes(word, matches[4]));
  matches[0] = line.signalPattern.find((word) => word.length === 6 && word !== matches[9]);

  // Length 5: 3, 5, 2
  matches[3] = line.signalPattern.find((word) => word.length === 5 && includes(word, matches[1]));
  matches[5] = line.signalPattern.find((word) => word.length === 5 && word !== matches[3] && includes(matches[6], word));
  matches[2] = line.signalPattern.find((word) => word.length === 5 && word !== matches[3] && word !== matches[5]);
  
  const translator = Object.fromEntries(
    Object.entries(matches).map((x) => x.reverse())
  );
  // console.log(translator);

  const translation = Number(line.outputValue.map((word) => translator[word]).join(''));
  console.log(translation);
  
  amount += translation;
  }
  console.log(amount);
}