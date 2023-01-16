/* eslint-disable no-await-in-loop */

/* eslint-disable no-restricted-syntax */

/* eslint-disable no-console */
import { calculateNextMove } from '@kputnins/scrabble-ai-core';
import { Game, PlayerType } from '@kputnins/scrabble-ai-game';

import { pipe } from '../utils';
import { printGameScreen } from './outputs/printGameScreen';
import { PlayerAction, getPlayerActions } from './prompts';
import { applyNextPlayer, applySkippedTurnAction } from './transforms';

/**
 * Play a games turn recursively until the game ends or all players skip 2 turns in a row
 *
 * @param {Game} game - The game state before the turn
 * @return {*} The game state after the turn
 */
export const playTurn = async (game: Game): Promise<Game> => {
  // Game ends if all players skip 2 turns in a row
  if (game.players.every((player) => player.skippedTurns >= 2)) {
    return game;
  }

  const currentPlayer = game.players[game.activePlayerIndex];

  if (currentPlayer) {
    printGameScreen(game, currentPlayer);

    if (currentPlayer.type === PlayerType.AI) {
      console.log(calculateNextMove(game, currentPlayer));
    }

    const playerResponse = await getPlayerActions();

    if (playerResponse.action === PlayerAction.QUIT) {
      return game;
    }

    const newGameState = pipe(game, [
      applySkippedTurnAction(playerResponse.action === PlayerAction.SKIP_TURN),
      applyNextPlayer,
    ]);

    return playTurn(newGameState);
  }

  return playTurn({ ...game, activePlayerIndex: 0, turn: game.turn + 1 });
};
