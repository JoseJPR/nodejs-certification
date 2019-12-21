/**
 * Description: Remove files with unlink and unlinkSync functions.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

const content = 'The file content';

// Declare remove function for create and remove file.
const remove = (fileName) => {
  // Create file with string content.
  fs.writeFile(
    `${__dirname}/src/file-system/${fileName}`,
    content,
    (errWriteFile) => {
      if (errWriteFile) {
        console.error(errWriteFile);
        throw errWriteFile;
      }
      console.info(`[remove] File ${__dirname}/src/file-system/${fileName} created.`);
      // Remove file name.
      fs.unlink(`${__dirname}/src/file-system/${fileName}`, (errRename) => {
        if (errRename) {
          console.error(errRename);
          throw errRename;
        }
        console.info(`[remove] File ${__dirname}/src/file-system/${fileName} removed.`);
      });
    },
  );
};
remove('test-file-remove');

// Declare mail function for open and close file by name.
const removeSync = (fileName) => {
  try {
    // Create file with string content.
    fs.writeFileSync(`${__dirname}/src/file-system/${fileName}`, content);
    console.info(`[removeSync] File ${__dirname}/src/file-system/${fileName} created.`);

    // Rename file name.
    fs.unlinkSync(`${__dirname}/src/file-system/${fileName}`);
    console.info(`[removeSync] File ${__dirname}/src/file-system/${fileName} removed.`);
  } catch (err) {
    console.error(err);
  }
};
removeSync('test-file-removeSync');
