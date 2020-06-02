/**
 * Description: Create Readable Stream with iterate map with severals objects items.
 */

/** Import generics dependences */
import { Readable } from 'stream';

const content = [
  'Hi',
  'From',
  'Array',
];

const origin = Readable.from(content.map((item) => ({
  timestamp: Date.now(),
  item,
})));

origin.on('data', (chunk) => {
  console.log(chunk);
});
