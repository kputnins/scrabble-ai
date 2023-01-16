import { Letter } from '../Letter';

/** Sorts the the available letter pool of the provided player
 *
 * @param letters - Letters to sort
 * @return A list of Letters sorted alphabetically
 */
export const sortLetters = (letters: Letter[]): Letter[] =>
  [...letters].sort((a: Letter, b: Letter) => a.symbol.localeCompare(b.symbol));
