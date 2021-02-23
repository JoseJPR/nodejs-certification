/**
 * Description: Chmod function for set and change permissions of a file.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import cp from 'child_process';
import 'pretty-console-colors';

const __dirname = path.resolve();

/**
 * Test for append string inside a existing file or a new file.
 */
const textToAppend700 = 'File with 700';
const textToAppend744 = 'File with 744';
const textToAppend777 = 'File with 777';

const setPermissions = (pathName, text, permissions) => {
  // Create file into folder with example text.
  fs.appendFile(`${__dirname}/src/file-system/${pathName}`, text, (errAppend) => {
    if (errAppend) {
      console.error(`[setPermissions] appendFile - Error adding text inside ${pathName} file!`);
      throw errAppend;
    }
    console.info(`[setPermissions] appendFile - Text added inside ${pathName} file!`);

    // Launch Chmod function for change permissions of file.
    fs.chmod(`${__dirname}/src/file-system/${pathName}`, permissions, (errChmod) => {
      if (errChmod) {
        console.error(`[setPermissions] chmod - Error changing permissions of ${pathName} file!`);
        throw errChmod;
      }
      console.info(`[setPermissions] chmod - Permissions changed of ${pathName} file!`);

      // Execute ls for see permissions of file.
      cp.exec(`ls -ld ${__dirname}/src/file-system/${pathName}`, (errExec, result) => {
        if (errExec) {
          console.error(`[setPermissions] exec - Error with ls of ${pathName} file!`);
          throw errExec;
        }
        console.info(`[setPermissions] exec - Ls of ${pathName} file!`, result);
      });
    });
  });
};
setPermissions('test-chmod/700', textToAppend700, 700);
setPermissions('test-chmod/744', textToAppend744, 744);
setPermissions('test-chmod/777', textToAppend777, 777);
