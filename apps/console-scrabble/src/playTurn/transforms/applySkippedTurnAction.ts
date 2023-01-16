import type { Game } from '@kputnins/scrabble-ai-game';

/**
 * Used to modify the current players skipped turn count
 *
 * @param {boolean} didPlayerSkipTurn - Did the current player skip the turn
 */
export const applySkippedTurnAction =
  (didPlayerSkipTurn: boolean) =>
  (game: Game): Game => ({
    ...game,
    players: game.players.map((player, index) =>
      index === game.activePlayerIndex
        ? {
            ...player,
            skippedTurns: didPlayerSkipTurn ? player.skippedTurns + 1 : 0,
          }
        : player,
    ),
  });
