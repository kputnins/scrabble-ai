import { BOARD_SIZE, Field, Game } from '@kputnins/scrabble-ai-game';

export enum PlayDirection {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
}

export interface PlayableField {
  field: Field;
  playDirection: PlayDirection;
}

export const getPlayableFields = (game: Game): PlayableField[] => {
  const currentPlayer = game.players[game.activePlayerIndex];

  if (currentPlayer) {
    const numberOfLetters = currentPlayer.letters.length;

    // If first move - return middle row
    if (game.turn === 0 && game.activePlayerIndex === 0) {
      return (
        game.board[Math.floor(BOARD_SIZE / 2)]
          ?.slice(
            Math.ceil(BOARD_SIZE / 2) - numberOfLetters,
            Math.ceil(BOARD_SIZE / 2),
          )
          .map((field) => ({
            playDirection: PlayDirection.HORIZONTAL,
            field,
          })) || []
      );
    }
  }

  return [];
};
