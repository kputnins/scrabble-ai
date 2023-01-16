import type { Alphabet } from '@kputnins/scrabble-ai-alphabet';
import { generateId } from '../utils';

/** Object representing the letter pieces used in scrabble */
export interface Letter {
  id: string;
  symbol: string;
  points: number;
}

/**
 * Generates scrabble Letters based on the provided Alphabet
 *
 * @param alphabet the Alphabet configuration for a particular language
 */
export const generateLetters = (alphabet: Alphabet): Letter[] =>
  Object.entries(alphabet).reduce<Letter[]>((previousValue, currentValue) => {
    const newLetters: Letter[] = [];

    for (let i = 0; i < currentValue[1].number; i += 1) {
      newLetters.push({
        id: generateId(),
        symbol: currentValue[0],
        points: currentValue[1].value,
      });
    }

    return [...previousValue, ...newLetters];
  }, []);
