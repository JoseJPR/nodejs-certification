/**
 * Description: Append function for include new data inside file.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

/**
 * Test for append string inside a existing file or a new file.
 */
const textToAppend = 'This is the text to add inside a file empty';
const textToAppendNewFile = 'This is the text to add inside a file new';

const appendText = (pathName, text) => {
  fs.appendFile(`${__dirname}/src/file-system/${pathName}`, text, (err) => {
    if (err) {
      console.error(`[appendText] Error adding text inside ${pathName} file!`);
      throw err;
    }
    console.info(`[appendText] Text added inside ${pathName} file!`);
  });
};
appendText('test-append/empty', textToAppend);
appendText('test-append/new', textToAppendNewFile);

/**
 * Test for appendSync string inside an existing file or a new file.
 */
const textToAppendSync = 'This is the text to add inside a file empty';
const textToAppendNewFileSync = 'This is the text to add inside a file new';

const appendTextSync = (pathName, text) => {
  try {
    fs.appendFileSync(`${__dirname}/src/file-system/${pathName}`, text);
    console.info(`[appendTextSync] Text added inside ${pathName} file!`);
  } catch (err) {
    console.error(`[appendTextSync] Error adding text inside ${pathName} file!`, err);
  }
};
appendTextSync('test-append/empty-sync', textToAppendSync);
appendTextSync('test-append/new-sync', textToAppendNewFileSync);
