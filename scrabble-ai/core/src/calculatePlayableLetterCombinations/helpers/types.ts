import type { Letter } from '@kputnins/scrabble-ai-game';

export type GenerateLetterPermutations = (
  letters: Letter[],
  depth?: number,
) => Letter[][];
