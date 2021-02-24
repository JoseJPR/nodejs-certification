/**
 * Description: Write severals string into file.txt with .write function.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const file = fs.createWriteStream(`${__dirname}/src/stream/stream-${Date.now()}.txt`);
file.write('some data');
file.write('some more data');
file.end('done writing data');
