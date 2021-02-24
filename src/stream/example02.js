/**
 * Description: Include callbacks for open, ready, finish, open and error events.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const file = fs.createWriteStream(`${__dirname}/src/stream/stream-moredata.txt`);
file.write('some data');
file.write('some more data');
file.end('done writing data');

file.on('open', () => {
  console.log('Event: open');
});

file.on('ready', () => {
  console.log('Event: ready');
});

file.on('finish', () => {
  console.log('Event: finish');
});

file.on('close', () => {
  console.log('Event: close');
});

/** Others */

file.on('error', () => {
  console.log('Event: error');
});
