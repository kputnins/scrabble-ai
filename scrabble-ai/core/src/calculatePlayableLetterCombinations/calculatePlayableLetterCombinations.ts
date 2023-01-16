import type { Letter } from '@kputnins/scrabble-ai-game';
import { generateLetterPermutations } from './helpers';

export const calculatePlayableLetterCombinations = (
  letters: Letter[],
): Letter[][] => {
  const letterPermutations = generateLetterPermutations(letters);

  // TODO - |Investigate this magic duplicate filtering
  return [
    ...new Map(
      letterPermutations.map((v) => [v.map((l) => l.symbol).join(''), v]),
    ).values(),
  ];
};
