/*
  This solution uses ES modules. Add the line “type”: “module”,
    to package.json immediately after the line “description”: “html-builder task for RSSchool”.
  For eslint and prettier: rename .eslintrc.js to .eslintrc.cjs, .prettierrc.js to .prettierrc.cjs,
    add sourceType: 'module' to parserOptions of .eslintrc.cjs (parserOptions: { ecmaVersion: 13, sourceType: 'module' }).
*/

import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const FILE_PATH = resolve(__dirname, 'text.txt');
const ERROR_MESSAGE = 'Oops! Something went wrong';

try {
  const readStream = createReadStream(FILE_PATH, { encoding: 'utf-8' });

  await pipeline(readStream, process.stdout);
} catch (error) {
  console.log(error instanceof Error ? error.message : ERROR_MESSAGE);
}
