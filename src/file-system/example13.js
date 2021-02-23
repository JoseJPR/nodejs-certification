/**
 * Description: Copy function for copy file from origin to destination.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import cp from 'child_process';
import 'pretty-console-colors';

const __dirname = path.resolve();

/**
 * Test for copy file from origin to destination.
 */
const copyFromTo = (origin, destination, fileName) => {

  // Execute ls for see permissions of file.
  cp.exec(`ls ${__dirname}/src/file-system/${destination}`, (errExec, result) => {
    if (errExec) {
      console.error(errExec);
      console.error(`[copyFile] exec - Error with ls of destination ${destination} folder!`);
      throw errExec;
    }
    console.info(`[copyFile] exec - Ls of destination ${destination} folder!`, result);

    // Launch Copy function for copy file from origin to destination.
    fs.copyFile(
      `${__dirname}/src/file-system/${origin}/${fileName}`,
      `${__dirname}/src/file-system/${destination}/${fileName}`,
      (errCopy) => {
        if (errCopy) {
          console.error(`[copyFile] copyFile - Error copy file from ${origin} to ${destination}!`);
          throw errCopy;
        }
        console.info(`[copyFile] copyFile - Copied file from ${origin} to ${destination}!`);

        // Execute ls for see permissions of file.
        cp.exec(`ls ${__dirname}/src/file-system/${destination}`, (errExecAgain, resultAgain) => {
          if (errExecAgain) {
            console.error(`[copyFile] exec - Error with ls of destination ${destination} folder!`);
            throw errExecAgain;
          }
          console.info(`[copyFile] exec - Ls of destination ${destination} folder!`, resultAgain);
        });
      },
    );
  });
};
copyFromTo('test-copy/folder-a', 'test-copy/folder-b', 'myfile');
