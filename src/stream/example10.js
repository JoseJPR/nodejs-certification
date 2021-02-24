/**
 * Description: Create Readable with iterate array.
 */

/** Import generics dependences */
import { Readable } from 'stream';

const content = [
  'Hi',
  'From',
  'Array',
];

const origin = Readable.from(content);

origin.on('data', (chunk) => {
  console.log(chunk);
});
