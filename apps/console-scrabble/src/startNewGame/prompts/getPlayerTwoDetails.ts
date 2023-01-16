import { PlayerType } from '@kputnins/scrabble-ai-game';
import prompts from 'prompts';

import { clearConsole } from '../../utils';

export const getPlayerTwoDetails = (): Promise<
  prompts.Answers<'name' | 'opponentType'>
> =>
  prompts(
    [
      {
        type: 'text',
        name: 'name',
        message: 'Enter player 2 name',
      },
      {
        type: 'select',
        name: 'opponentType',
        message: 'Select opponent type',
        choices: [
          { title: 'Human', value: PlayerType.HUMAN },
          { title: 'AI', value: PlayerType.AI },
        ],
        initial: 0,
      },
    ],
    {
      onSubmit: clearConsole,
    },
  );
