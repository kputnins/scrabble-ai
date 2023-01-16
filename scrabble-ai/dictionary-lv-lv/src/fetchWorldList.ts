import { stat, writeFile } from 'fs/promises';

import { OUTPUT_DIR } from './constants';

const WORLD_LIST_URL =
  'https://github.com/LUMII-AILab/Tezaurs/raw/master/wordlists/entries.txt';

export const fetchWorldList = async (outputFileName: string) => {
  const start = performance.now();

  const response = await fetch(WORLD_LIST_URL);
  const data = await response.text();

  await writeFile(OUTPUT_DIR + outputFileName, data);
  const fileSize = await stat(OUTPUT_DIR + outputFileName);

  const stop = performance.now();
  // eslint-disable-next-line no-console
  console.log(
    `Downloaded ${(fileSize.size / (1024 * 1024)).toFixed(
      2,
    )} mb word-list from https://github.com/LUMII-AILab/Tezaurs in ${Math.round(
      stop - start,
    )} ms`,
  );
};
