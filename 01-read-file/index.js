import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = resolve(__dirname, 'text.txt');

const readStream = createReadStream(filePath, { encoding: 'utf-8' });

try {
  await pipeline(readStream, process.stdout);
} catch (error) {
  console.log(error instanceof Error ? error.message : 'Something went wrong');
}
