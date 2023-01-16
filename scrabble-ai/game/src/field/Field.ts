import { Letter } from '../letter';

export enum Modifier {
  STARTING_POINT = 'STARTING_POINT',
  DOUBLE_LETTER_SCORE = 'DOUBLE_LETTER_SCORE',
  TRIPLE_LETTER_SCORE = 'TRIPLE_LETTER_SCORE',
  DOUBLE_WORD_SCORE = 'DOUBLE_WORD_SCORE',
  TRIPLE_WORD_SCORE = 'TRIPLE_WORD_SCORE',
}

export interface Coordinates {
  row: number;
  column: number;
}

/** Object representing a game board field.
 *
 * Contains the innate modifiers and currently occupying letter
 */
export interface Field {
  coordinates: Coordinates;
  modifier?: Modifier;
  letter?: Letter;
}
