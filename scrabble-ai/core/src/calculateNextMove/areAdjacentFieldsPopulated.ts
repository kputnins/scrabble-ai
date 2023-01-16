import { Board, Field } from '@kputnins/scrabble-ai-game';
import { isFieldPopulated } from './isFieldPopulated';

export const areAdjacentFieldsPopulated = (
  board: Board,
  field: Field,
): boolean => {
  const { row, column } = field.coordinates;
  const coordinatesToCheck: [number, number][] = [
    [row - 1, column],
    [row, column - 1],
    [row, column + 1],
    [row + 1, column],
  ];

  return coordinatesToCheck.some((coordinates) =>
    isFieldPopulated(board[coordinates[0]]?.[coordinates[1]]),
  );
};
