import {readFile} from 'node:fs/promises';
import * as url from 'url';

const directory = url.fileURLToPath(new URL('.', import.meta.url));

const fileTaxRepository = {
  get: async () => {
    const content = await readFile(`${directory}/tax.txt`, {encoding: 'utf8'});
    return content;
  }
}
export {
  fileTaxRepository
}
