import { Board } from '../Board';
import { ModifierLists, modifierLists } from '../modifiers/modifiers';

/** Adds the special modifiers to teh configured board fields */
export const setSpecialFields = (
  board: Board,
  customModifierLists?: ModifierLists,
): void => {
  (customModifierLists || modifierLists).forEach((modifierList) =>
    modifierList.list.forEach(({ row, column }) => {
      const field = board[row]?.[column];
      if (field) {
        field.modifier = modifierList.modifier;
      }
    }),
  );
};
