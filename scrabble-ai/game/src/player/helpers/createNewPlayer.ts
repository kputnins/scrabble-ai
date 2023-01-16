import { Letter, sortLetters } from '../../letter';
import { generateId } from '../../utils';
import { Player, PlayerType } from '../Player';

/**
 * Creates a new Player object
 *
 * @param {string} name - The players name
 * @param {Letter[]} letters - The available starting letters
 * @param {PlayerType} [type=PlayerType.HUMAN] - the type of the player: Human or AI. Defaults to Human
 */
export const createNewPlayer = (
  letters: Letter[],
  name?: string,
  type: PlayerType = PlayerType.HUMAN,
): Player => {
  const id = generateId(4);
  return {
    id,
    name: name || id,
    type,
    score: 0,
    letters: sortLetters(letters),
    skippedTurns: 0,
  };
};
