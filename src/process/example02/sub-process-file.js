/**
 * Description: Use beforeExit event for get when event loop has no additional work to schedule.
 */

/** Require generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

/**
 * Write response data into file with stream.
 */
const appendFile = (pathName, textToAppend) => {
  fs.appendFile(`${__dirname}/src/process/example02/${pathName}`, `${textToAppend}\r\n`, (err) => {
    if (err) {
      console.error(`[appendText] Error adding text inside ${pathName} file!`);
      throw err;
    }
    console.info(`[appendText] Text added inside ${pathName} file!`);
  });
};

// Write data on file with received message fron main process.
process.on('message', (data) => {
  console.log('Message received on sub-process-file: ', data);
  appendFile('sub-process-file.txt', JSON.stringify(data));
});
