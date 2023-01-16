import prompts from 'prompts';

import { clearConsole } from '../../utils';

export const getPlayerOneDetails = (): Promise<prompts.Answers<'name'>> =>
  prompts(
    {
      type: 'text',
      name: 'name',
      message: 'Enter player 1 name',
    },
    {
      onSubmit: clearConsole,
    },
  );
