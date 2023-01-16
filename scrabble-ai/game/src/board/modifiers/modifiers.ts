import { Coordinates, Modifier } from '../../field/Field';

const startingPointCoordinates: Coordinates[] = [{ row: 7, column: 7 }];
const doubleLetterScoreCoordinates: Coordinates[] = [
  { row: 0, column: 3 },
  { row: 0, column: 11 },
  { row: 2, column: 6 },
  { row: 2, column: 8 },
  { row: 3, column: 0 },
  { row: 3, column: 7 },
  { row: 3, column: 14 },
  { row: 6, column: 2 },
  { row: 6, column: 6 },
  { row: 6, column: 8 },
  { row: 6, column: 12 },
  { row: 7, column: 3 },
  { row: 7, column: 11 },
  { row: 8, column: 2 },
  { row: 8, column: 6 },
  { row: 8, column: 8 },
  { row: 8, column: 12 },
  { row: 11, column: 0 },
  { row: 11, column: 7 },
  { row: 11, column: 14 },
  { row: 12, column: 6 },
  { row: 12, column: 8 },
  { row: 14, column: 3 },
  { row: 14, column: 11 },
];
const tripleLetterScoreCoordinates: Coordinates[] = [
  { row: 1, column: 5 },
  { row: 1, column: 9 },
  { row: 5, column: 1 },
  { row: 5, column: 5 },
  { row: 5, column: 9 },
  { row: 5, column: 13 },
  { row: 9, column: 1 },
  { row: 9, column: 5 },
  { row: 9, column: 9 },
  { row: 9, column: 13 },
  { row: 13, column: 5 },
  { row: 13, column: 9 },
];
const doubleWordScoreCoordinates: Coordinates[] = [
  { row: 1, column: 1 },
  { row: 1, column: 13 },
  { row: 2, column: 2 },
  { row: 2, column: 12 },
  { row: 3, column: 3 },
  { row: 3, column: 11 },
  { row: 4, column: 4 },
  { row: 4, column: 10 },
  { row: 10, column: 4 },
  { row: 10, column: 10 },
  { row: 11, column: 3 },
  { row: 11, column: 11 },
  { row: 12, column: 2 },
  { row: 12, column: 12 },
  { row: 13, column: 1 },
  { row: 13, column: 13 },
];
const tripleWordScoreCoordinates: Coordinates[] = [
  { row: 0, column: 0 },
  { row: 0, column: 7 },
  { row: 0, column: 14 },
  { row: 7, column: 0 },
  { row: 7, column: 14 },
  { row: 14, column: 0 },
  { row: 14, column: 7 },
  { row: 14, column: 14 },
];

export type ModifierLists = { modifier: Modifier; list: Coordinates[] }[];

/** A list of the default scrabble board modifiers */
export const modifierLists: ModifierLists = [
  { modifier: Modifier.STARTING_POINT, list: startingPointCoordinates },
  {
    modifier: Modifier.DOUBLE_LETTER_SCORE,
    list: doubleLetterScoreCoordinates,
  },
  {
    modifier: Modifier.TRIPLE_LETTER_SCORE,
    list: tripleLetterScoreCoordinates,
  },
  { modifier: Modifier.DOUBLE_WORD_SCORE, list: doubleWordScoreCoordinates },
  { modifier: Modifier.TRIPLE_WORD_SCORE, list: tripleWordScoreCoordinates },
];
