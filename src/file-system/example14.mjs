/**
 * Description: Create Read Stream from file for get all content and others.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

/**
 * Read all the content file with stream.
 */
const readFile = (pathName) => {
  try {
    const stream = fs.createReadStream(`${__dirname}/src/file-system/${pathName}`);
    stream.on('data', (d) => {
      console.log('[readFile]', d.toString());
    });
  } catch (e) {
    console.error('[readFile]', e);
  }
};
readFile('test/file1.txt');

/**
 * Read only the first 10 bites the content file with stream.
 */
const readFileStartEnd = (pathName) => {
  try {
    const stream = fs.createReadStream(
      `${__dirname}/src/file-system/${pathName}`,
      {
        start: 0,
        end: 10,
      },
    );
    stream.on('data', (d) => {
      console.log('[readFileStartEnd]', d.toString());
    });
  } catch (e) {
    console.error('[readFileStartEnd]', e);
  }
};
readFileStartEnd('test/file1.txt');
