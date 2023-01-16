import { Modifier } from '@kputnins/scrabble-ai-game';

export const visualizeModifier = (modifier?: Modifier): string => {
  switch (modifier) {
    case Modifier.STARTING_POINT:
      return '✲';
    case Modifier.DOUBLE_LETTER_SCORE:
      return '♢';
    case Modifier.TRIPLE_LETTER_SCORE:
      return '♦';
    case Modifier.DOUBLE_WORD_SCORE:
      return '☆';
    case Modifier.TRIPLE_WORD_SCORE:
      return '★';

    default:
      return ' ';
  }
};
