/* eslint-disable no-console */
import { Game, Player } from '@kputnins/scrabble-ai-game';
import chalk from 'chalk';

import { clearConsole } from '../../utils';
import { printBoard } from './printBoard';

export const printGameScreen = (game: Game, currentPlayer: Player): void => {
  clearConsole();
  console.log(`Turn ${game.turn + 1}`);
  console.log(`It is player ${currentPlayer.name} move`);
  printBoard(game);
  console.log(
    '\n',
    chalk.green(`Available letters: `),
    currentPlayer.letters
      .map((letter) => `${letter.symbol.toUpperCase()} - ${letter.points}`)
      .join(', '),
  );
  if (currentPlayer.skippedTurns) {
    console.log(
      chalk.red('Skipped turns in  a row: ', currentPlayer.skippedTurns, '\n'),
    );
  }
};
