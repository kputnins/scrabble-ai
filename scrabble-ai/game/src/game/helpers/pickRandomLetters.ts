import type { Letter } from '../../letter';
import { pickRandomLetter } from './pickRandomLetter';

/**
 * Removes and retrieves a number of random letter from the provided list of letters.
 * Returns the removed letters and a new list of the remaining letters
 *
 * @param {Letter[]} letters - The list of Game Letters
 * @param {number} numberOfLetters - How many letters to pick
 * @return {*}  { newLetterList: Letter[]; removedLetters: Letter[] }
 */
export const pickRandomLetters = (
  letters: Letter[],
  numberOfLetters: number,
): { newLetterList: Letter[]; removedLetters: Letter[] } => {
  const removedLetters: Letter[] = [];
  const newLetterList: Letter[] = [];

  for (let i = 0; i < numberOfLetters; i += 1) {
    const result = pickRandomLetter(letters);
    removedLetters.push(result.removedLetter);
    if (i === numberOfLetters - 1) {
      newLetterList.push(...result.newLetterList);
    }
  }

  return { newLetterList, removedLetters };
};
