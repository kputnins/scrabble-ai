import type {
  Coordinates,
  Game,
  Letter,
  Player,
} from '@kputnins/scrabble-ai-game';

import { calculatePlayableLetterCombinations } from '../calculatePlayableLetterCombinations/calculatePlayableLetterCombinations';
import { getPlayableFields } from './getPlayableFields';

export interface Move {
  coordinates: Coordinates;
  letter: Letter;
}

export type Moves = Move[];

export const calculateNextMove = (game: Game, currentPlayer: Player): Moves => {
  const playableFields = getPlayableFields(game);
  const playableWords = calculatePlayableLetterCombinations(
    currentPlayer.letters,
  );

  console.log('playableFields', playableFields);
  console.log(
    'playableWords',
    playableWords.map((playableWord) =>
      playableWord.flatMap((letter) => letter.symbol).join(''),
    ),
  );

  return [
    {
      coordinates: { row: 8, column: 7 },
      letter: { id: '1', value: 2, symbol: 'j' },
    },
    {
      coordinates: { row: 8, column: 8 },
      letter: { id: '2', value: 2, symbol: 'ē' },
    },
    {
      coordinates: { row: 8, column: 9 },
      letter: { id: '3', value: 2, symbol: 'j' },
    },
  ];
};
