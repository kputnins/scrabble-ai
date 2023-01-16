import { readFile, unlink, writeFile } from 'fs/promises';

import { OUTPUT_DIR } from './constants';

export const parseEntries = async (
  inputFileName: string,
  outputFileName: string,
) => {
  const start = performance.now();

  const NEW_LINE = /\r?\n/;
  // All ASCI capitals plus [./-ĀĒĪŪŌČĢĶĻŅŠŽ]
  const CHARACTERS_TO_FILTER =
    /[0-9A-Z./\-\u0100\u0112\u012a\u016a\u014c\u010c\u0122\u0136\u013b\u0145\u0160\u017d]/;
  const INPUT_SEPARATOR = '	';

  let output = 'export const dictionary: string[] = [';
  let outputWordCount = 0;

  const text = await readFile(OUTPUT_DIR + inputFileName, 'utf-8');
  const textLines = text.split(NEW_LINE);
  const numberOfLines = textLines.length;

  textLines.forEach((line, index) => {
    const firstWord = line.split(INPUT_SEPARATOR)[0];
    const isValidWord =
      firstWord &&
      firstWord.length > 1 &&
      firstWord.length < 15 &&
      firstWord.search(CHARACTERS_TO_FILTER) === -1;

    if (isValidWord) {
      output += `"${firstWord}",`;
      outputWordCount += 1;
    }

    if (index === numberOfLines - 1) {
      output = `${output.slice(0, -1)}];`;
    }
  });

  await writeFile(`${OUTPUT_DIR + outputFileName}.ts`, output);
  await unlink(OUTPUT_DIR + inputFileName);

  const stop = performance.now();
  // eslint-disable-next-line no-console
  console.log(
    `Created dictionary with ${outputWordCount} words in ${Math.round(
      stop - start,
    )} ms`,
  );
};
