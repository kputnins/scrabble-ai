import { Field } from '@kputnins/scrabble-ai-game';

export const isFieldPopulated = (field?: Field): boolean => !!field?.letter;
