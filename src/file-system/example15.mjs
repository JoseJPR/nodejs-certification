/**
 * Description: Create file and Write Stream of new file for save all content.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

/**
 * Write the string into file with stream.
 */
const textToAppend = 'This is the text to add inside a file empty';

const writeFile = (pathName) => {
  try {
    const stream = fs.createWriteStream(`${__dirname}/src/file-system/${pathName}`);
    stream.write(textToAppend);
    stream.on('open', () => {
      console.log('[writeFile] open');
    });
    stream.on('error', (e) => {
      console.log('[writeFile] error', e);
    });
  } catch (e) {
    console.error('[writeFile]', e);
  }
};
writeFile('test/file-stream.txt');
