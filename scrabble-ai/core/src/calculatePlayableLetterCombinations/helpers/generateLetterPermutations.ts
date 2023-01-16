import type { Letter } from '@kputnins/scrabble-ai-game';

import { generateSwappedLetterPermutations } from './generateSwappedLetterPermutations';
import type { GenerateLetterPermutations } from './types';

export const generateLetterPermutations: GenerateLetterPermutations = (
  letters,
  depth = letters.length,
) => {
  if (depth === 1) {
    return [[...letters]];
  }

  const letterPermutations: Letter[][] = generateLetterPermutations(
    [...letters],
    depth - 1,
  );
  const swappedLetterPErmutations = generateSwappedLetterPermutations(
    letters,
    [],
    depth,
    generateLetterPermutations,
    0,
  );

  return [...letterPermutations, ...swappedLetterPErmutations];
};
