/* eslint-disable no-console */
import { alphabetLvLv } from '@kputnins/scrabble-ai-alphabet';
import { PlayerType, createNewGame } from '@kputnins/scrabble-ai-game';

import { playTurn } from '../playTurn/playTurn';
import { clearConsole } from '../utils';
import { processGameResult } from './outputs';
import { getPlayerOneDetails, getPlayerTwoDetails } from './prompts';

export const startNewGame = async (): Promise<void> => {
  clearConsole();

  const playerOne = await getPlayerOneDetails();
  const playerTwo = await getPlayerTwoDetails();

  const game = createNewGame({
    alphabet: alphabetLvLv,
    playerParams: [
      { name: playerOne.name },
      {
        name: playerTwo.name,
        type: playerTwo.opponentType as PlayerType,
      },
    ],
  });

  const gameResult = await playTurn(game);
  processGameResult(gameResult);
};
