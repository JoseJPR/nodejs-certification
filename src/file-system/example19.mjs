/**
 * Description: Rename file with rename and renameSync functions.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

const content = 'The file content';

// Declare mail function for open and close file by name.
const rename = (actualName, newName) => {
  // Create file with string content.
  fs.writeFile(
    `${__dirname}/src/file-system/${actualName}`,
    content,
    (errWriteFile) => {
      if (errWriteFile) {
        console.error(errWriteFile);
        throw errWriteFile;
      }

      // Rename file name.
      fs.rename(
        `${__dirname}/src/file-system/${actualName}`,
        `${__dirname}/src/file-system/${newName}`,
        (errRename) => {
          if (errRename) {
            console.error(errRename);
            throw errRename;
          }
          console.info(`[rename] File ${__dirname}/src/file-system/${actualName} renamed.`);
        },
      );
    },
  );
};
rename('test-actualname', 'test-newname');

// Declare mail function for open and close file by name.
const renameSync = (actualName, newName) => {
  try {
    // Create file with string content.
    fs.writeFileSync(`${__dirname}/src/file-system/${actualName}`, content);
    console.info(`[renameSync] File ${__dirname}/src/file-system/${actualName} created.`);

    // Rename file name.
    fs.renameSync(
      `${__dirname}/src/file-system/${actualName}`,
      `${__dirname}/src/file-system/${newName}`,
    );
    console.info(`[renameSync] File ${__dirname}/src/file-system/${actualName} renamed.`);
  } catch (err) {
    console.error(err);
  }
};
renameSync('test-actualnameSync', 'test-newnameSync');
