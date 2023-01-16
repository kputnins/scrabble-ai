import type { Letter } from '@kputnins/scrabble-ai-game';
import type { GenerateLetterPermutations } from './types';

export const generateSwappedLetterPermutations = (
  letters: Letter[],
  result: Letter[][],
  maxDepth: number,
  generatePermutations: GenerateLetterPermutations,
  currentDepth = 0,
): Letter[][] => {
  if (currentDepth >= maxDepth - 1) {
    return result;
  }

  const swappedLetters: Letter[] = [...letters];
  const swapIndex = maxDepth % 2 ? currentDepth : 0;
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  [swappedLetters[swapIndex]!, swappedLetters[maxDepth - 1]!] = [
    swappedLetters[maxDepth - 1]!,
    swappedLetters[swapIndex]!,
  ];
  /* eslint-enable @typescript-eslint/no-non-null-assertion */

  return generateSwappedLetterPermutations(
    swappedLetters,
    [...result, ...generatePermutations(swappedLetters, maxDepth - 1)],
    maxDepth,
    generatePermutations,
    currentDepth + 1,
  );
};
