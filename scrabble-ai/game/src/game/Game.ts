import { Board } from '../board';
import { Letter } from '../letter';
import { Player } from '../player';

/**
 * Scrabble game state object.
 * Keeps track of the game board, letters, turns and players
 */
export interface Game {
  /** A data representation of the Scrabble board state */
  board: Board;
  /** The letters available to be played in the game */
  letters: Letter[];
  /** The players of the scrabble game */
  players: Player[];
  /** The games current turn */
  turn: number;
  /** The current player of the turn */
  activePlayerIndex: number;
}
