import type { Alphabet } from '@kputnins/scrabble-ai-alphabet';

import { createBoard } from '../../board';
import { generateLetters } from '../../letter';
import type { Game } from '../Game';
import { PlayerParam, createPlayers } from './createPlayers';

/** Parameters required to initialize the Games */
export interface GameParams {
  alphabet: Alphabet;
  playerParams: PlayerParam[];
}

/**
 * Creates the scrabble game state object.
 *
 * @param {GameParams} GameParams - Object containing the alphabet that will be used and the player parameters
 * @return {Game} The created Game object
 */
export const createNewGame = ({ alphabet, playerParams }: GameParams): Game => {
  const { players, remainingLetters } = createPlayers({
    letters: generateLetters(alphabet),
    playerParams,
    numberOfPlayers: playerParams.length,
    players: [],
  });

  return {
    board: createBoard(),
    letters: remainingLetters,
    players,
    turn: 0,
    activePlayerIndex: 0,
  };
};
