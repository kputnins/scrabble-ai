import type { Letter } from '../../letter';
import { generateRandomInteger } from '../../utils';

/**
 * Removes and retrieves a random letter from the provided list of letters.
 * Returns the removed letter and a new list of the remaining letters
 *
 * @param {Letter[]} letters - The list of Game Letters
 * @return {*}  { newLetterList: Letter[]; removedLetter: Letter }
 */
export const pickRandomLetter = (
  letters: Letter[],
): { newLetterList: Letter[]; removedLetter: Letter } => {
  const randomIndex = generateRandomInteger({
    min: 0,
    max: letters.length - 1,
  });
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const removedLetter = letters[randomIndex]!;
  const newLetterList = letters.filter((_, index) => index !== randomIndex);
  return { newLetterList, removedLetter };
};
