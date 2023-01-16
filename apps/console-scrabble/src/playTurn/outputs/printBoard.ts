/* eslint-disable no-console */
import type { Game } from '@kputnins/scrabble-ai-game/src/game/Game';
import chalk from 'chalk';

import { visualizeModifier } from './visualizeModifier';

/**
 * Prints the current game board to console
 *
 * @param {Game} game - The game object
 */
export const printBoard = (game: Game): void => {
  console.log(
    chalk.yellow(
      `   ${game.board
        .map((_row, index) =>
          index + 1 < 10 ? ` ${index + 1}` : `${index + 1}`,
        )
        .join('  ')}`,
    ),
  );
  game.board.forEach((row, index) =>
    console.log(
      chalk.yellow(
        index + 1 < 10 ? ` ${index + 1} ` : `${index + 1} `,
        chalk.blue(
          row
            .map((field) => field.letter || visualizeModifier(field.modifier))
            .join(' | '),
        ),
      ),
    ),
  );
};
