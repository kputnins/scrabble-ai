import { generateLetterPermutations } from './generateLetterPermutations';

const testLetters = [
  { id: '1', value: 2, symbol: '1' },
  { id: '2', value: 2, symbol: '2' },
  { id: '3', value: 2, symbol: '3' },
];

const testResult = [
  [
    { id: '1', value: 2, symbol: '1' },
    { id: '2', value: 2, symbol: '2' },
    { id: '3', value: 2, symbol: '3' },
  ],
  [
    { id: '2', value: 2, symbol: '2' },
    { id: '1', value: 2, symbol: '1' },
    { id: '3', value: 2, symbol: '3' },
  ],
  [
    { id: '3', value: 2, symbol: '3' },
    { id: '2', value: 2, symbol: '2' },
    { id: '1', value: 2, symbol: '1' },
  ],
  [
    { id: '2', value: 2, symbol: '2' },
    { id: '3', value: 2, symbol: '3' },
    { id: '1', value: 2, symbol: '1' },
  ],
  [
    { id: '3', value: 2, symbol: '3' },
    { id: '1', value: 2, symbol: '1' },
    { id: '2', value: 2, symbol: '2' },
  ],
  [
    { id: '1', value: 2, symbol: '1' },
    { id: '3', value: 2, symbol: '3' },
    { id: '2', value: 2, symbol: '2' },
  ],
];

describe('generateLetterPermutations', () => {
  it('generates the expected permutations', () => {
    expect(generateLetterPermutations(testLetters)).toStrictEqual(testResult);
  });
});
