/**
 * Description: Write function for include new data inside file.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

/**
 * Test for write string inside a existing file or a new file.
 */
const textToWrite = 'This is the text to add inside a file empty';
const textToWriteNewFile = 'This is the text to add inside a file new';

const writeText = (pathName, text) => {
  fs.writeFile(`${__dirname}/src/file-system/${pathName}`, text, (err) => {
    if (err) {
      console.error(`[writeText] Error adding text inside ${pathName} file!`);
      throw err;
    }
    console.info(`[writeText] Text added inside ${pathName} file!`);
  });
};
writeText('test-write/empty', textToWrite);
writeText('test-write/new', textToWriteNewFile);

/**
 * Test for writeSync string inside an existing file or a new file.
 */
const textToWriteSync = 'This is the text to add inside a file empty';
const textToWriteNewFileSync = 'This is the text to add inside a file new';

const writeTextSync = (pathName, text) => {
  try {
    fs.appendFileSync(`${__dirname}/src/file-system/${pathName}`, text);
    console.info(`[writeTextSync] Text added inside ${pathName} file!`);
  } catch (err) {
    console.error(`[writeTextSync] Error adding text inside ${pathName} file!`, err);
  }
};
writeTextSync('test-write/empty-sync', textToWriteSync);
writeTextSync('test-write/new-sync', textToWriteNewFileSync);
