import prompts from 'prompts';

import { startNewGame } from './startNewGame/startNewGame';

const main = async () => {
  await startNewGame();

  const endPrompt = await prompts({
    type: 'toggle',
    name: 'playAgain',
    message: 'Play again?',
    initial: true,
    active: 'yes',
    inactive: 'no',
  });

  if (endPrompt.playAgain) {
    main();
  }
};

main();
