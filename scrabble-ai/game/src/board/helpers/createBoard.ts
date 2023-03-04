import { BOARD_SIZE } from '../../constants/settings';
import { Board } from '../Board';
import { ModifierLists } from '../modifiers/modifiers';
import { setSpecialFields } from './setSpecialFields';

export type CreateBoardParams = {
  width?: number;
  height?: number;
  customModifierLists?: ModifierLists;
};

/** Generates a clean scrabble board with the innate modifiers */
export const createBoard = ({
  width,
  height,
  customModifierLists,
}: CreateBoardParams = {}): Board => {
  const board: Board = [];

  for (let i = 0; i < (height || BOARD_SIZE); i += 1) {
    board.push([]);
    for (let j = 0; j < (width || BOARD_SIZE); j += 1) {
      board[i]?.push({
        coordinates: { row: i, column: j },
      });
    }
  }

  setSpecialFields(board, customModifierLists);

  return board;
};
