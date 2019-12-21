/**
 * Description: Create symbolic link with link function.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

/**
 * Create a symbolic link of file.
 */
const linkFile = (origin, destination) => {
  fs.link(
    `${__dirname}/src/file-system/${origin}`,
    `${__dirname}/src/file-system/${destination}`,
    (err) => {
      if (err) {
        console.error('[linkFile]', err);
        throw err;
      }
      console.info('[linkFile] Link created.');
    },
  );
};
linkFile('test-link/folder-a/file.txt', 'test-link/folder-b/file.txt');
