/* eslint-disable no-console */
import { Game } from '@kputnins/scrabble-ai-game';

export const processGameResult = (game: Game): void => {
  console.log(`Game ended on turn: ${game.turn}`);
  game.players.forEach((player) =>
    console.log(`${player.name}: ${player.score}`),
  );
  console.log('\n');
};
