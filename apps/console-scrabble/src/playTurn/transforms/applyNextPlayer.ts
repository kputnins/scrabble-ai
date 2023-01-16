import type { Game } from '@kputnins/scrabble-ai-game';

/**
 * Used to increment the games current active player
 */
export const applyNextPlayer = (game: Game): Game => ({
  ...game,
  activePlayerIndex: game.activePlayerIndex + 1,
});
