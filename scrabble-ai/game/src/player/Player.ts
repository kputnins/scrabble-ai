import { Letter } from '../letter';

/** Human or AI */
export enum PlayerType {
  HUMAN = 'HUMAN',
  AI = 'AI',
}

/** The player object */
export interface Player {
  id: string;
  name: string;
  type: PlayerType;
  score: number;
  /** The pool of Letters available to the player */
  letters: Letter[];
  /** The number of turns the player has skipped in a row */
  skippedTurns: number;
}
