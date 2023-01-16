import { generateLetterPermutations } from './generateLetterPermutations';

const testLetters = [
  { id: '1', points: 2, symbol: '1' },
  { id: '2', points: 2, symbol: '2' },
  { id: '3', points: 2, symbol: '3' },
];

const testResult = [
  [
    { id: '1', points: 2, symbol: '1' },
    { id: '2', points: 2, symbol: '2' },
    { id: '3', points: 2, symbol: '3' },
  ],
  [
    { id: '2', points: 2, symbol: '2' },
    { id: '1', points: 2, symbol: '1' },
    { id: '3', points: 2, symbol: '3' },
  ],
  [
    { id: '3', points: 2, symbol: '3' },
    { id: '2', points: 2, symbol: '2' },
    { id: '1', points: 2, symbol: '1' },
  ],
  [
    { id: '2', points: 2, symbol: '2' },
    { id: '3', points: 2, symbol: '3' },
    { id: '1', points: 2, symbol: '1' },
  ],
  [
    { id: '3', points: 2, symbol: '3' },
    { id: '1', points: 2, symbol: '1' },
    { id: '2', points: 2, symbol: '2' },
  ],
  [
    { id: '1', points: 2, symbol: '1' },
    { id: '3', points: 2, symbol: '3' },
    { id: '2', points: 2, symbol: '2' },
  ],
];

describe('generateLetterPermutations', () => {
  it('generates the expected permutations', () => {
    expect(generateLetterPermutations(testLetters)).toStrictEqual(testResult);
  });
});
