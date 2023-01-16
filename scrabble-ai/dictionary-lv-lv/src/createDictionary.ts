import { fetchWorldList } from './fetchWorldList';
import { parseEntries } from './parseEntries';

export const createDictionary = async () => {
  await fetchWorldList('tmp.txt');
  await parseEntries('tmp.txt', 'dictionary');
};
