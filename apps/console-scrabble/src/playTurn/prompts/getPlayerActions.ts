import prompts from 'prompts';

import { PlayerAction } from './PlayerAction';

export const getPlayerActions = async (): Promise<prompts.Answers<'action'>> =>
  prompts([
    {
      type: 'select',
      name: 'action',
      message: 'What do you want to do',
      choices: [
        { title: 'Play a letter', value: PlayerAction.PLAY_LETTER },
        { title: 'Skip turn', value: PlayerAction.SKIP_TURN },
        { title: 'Quit', value: PlayerAction.QUIT },
      ],
      initial: 0,
    },
  ]);
