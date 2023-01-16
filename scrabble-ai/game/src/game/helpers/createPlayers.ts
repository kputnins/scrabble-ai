import type { Letter } from '../../letter';
import { Player, createNewPlayer, PlayerType } from '../../player';
import { pickRandomLetters } from './pickRandomLetters';

/** Parameters required to initialize the games Payer */
export interface PlayerParam {
  name: string;
  type?: PlayerType;
}

export interface CreatePlayersParams {
  letters: Letter[];
  playerParams: PlayerParam[];
  numberOfPlayers: number;
  players: Player[];
  currentDepth?: number;
}

/**
 * Creates a list of the Player object for the game.
 * Works recursively by
 * - picking letters from the provided letter list
 * - giving them to a created Player
 * - calls itself with or returns the created player and the remaining letters lists
 *
 * @param {letters[]} letters - Available Letter list
 * @param {PlayerParam[]} playerParams - Parameters required for generating a player object,
 * @param {number} numberOfPlayers - Number of players required for tha game,
 * @param {Player[]} players - List of the created players,
 * @param {number} currentDepth - Current recursion depth
 * @return {*} An object of Player[] and Letter[] lists
 */
export const createPlayers = ({
  letters,
  playerParams,
  numberOfPlayers,
  players,
  currentDepth = 0,
}: CreatePlayersParams): { players: Player[]; remainingLetters: Letter[] } => {
  if (currentDepth === numberOfPlayers) {
    return { players, remainingLetters: letters };
  }

  const name = playerParams[currentDepth]?.name;
  const type = playerParams[currentDepth]?.type;
  const { newLetterList: remainingLetters, removedLetters: playerLetters } =
    pickRandomLetters(letters, 7);

  const newPlayers: Player[] = [
    ...players,
    createNewPlayer(playerLetters, name, type),
  ];

  return createPlayers({
    letters: remainingLetters,
    playerParams,
    numberOfPlayers,
    players: newPlayers,
    currentDepth: currentDepth + 1,
  });
};
