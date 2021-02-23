/**
 * Description: Chown function for set and change owner and group of a file.
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
const textToAppend = 'File of other user';

const setOwner = (pathName, text, uid, gid) => {
  // Create file into folder with example text.
  fs.appendFile(`${__dirname}/src/file-system/${pathName}`, text, (errAppend) => {
    if (errAppend) {
      console.error(`[setOwner] appendFile - Error adding text inside ${pathName} file!`);
      throw errAppend;
    }
    console.info(`[setOwner] appendFile - Text added inside ${pathName} file!`);

    // Execute ls for see permissions of file.
    cp.exec(`ls -ld ${__dirname}/src/file-system/${pathName}`, (errExec, result) => {
      if (errExec) {
        console.error(errExec);
        console.error(`[setOwner] exec - Error with ls of ${pathName} file!`);
        throw errExec;
      }
      console.info(`[setOwner] exec - Ls of ${pathName} file!`, result);

      // Launch Chown function for change permissions of file.
      fs.chown(`${__dirname}/src/file-system/${pathName}`, uid, gid, (errChmod) => {
        if (errChmod) {
          console.error(`[setOwner] chown - Error changing owner and groud of ${pathName} file!`);
          throw errChmod;
        }
        console.info(`[setOwner] chown - Changed owner and groud of ${pathName} file!`);

        // Execute ls for see permissions of file.
        cp.exec(`ls -ld ${__dirname}/src/file-system/${pathName}`, (errExecAgain, resultAgain) => {
          if (errExecAgain) {
            console.error(`[setOwner] exec - Error with ls of ${pathName} file!`);
            throw errExecAgain;
          }
          console.info(`[setOwner] exec - Ls of ${pathName} file!`, resultAgain);
        });
      });

    });
  });
};
setOwner('test-chown/other', textToAppend, 501, 20);
