/**
 * Description: Create directories with mkdir, mkdirSync.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

/**
 * Create a directory with mkdir and with recursive option.
 */
const createDirectory = (origin, options = {}) => {
  fs.mkdir(
    `${__dirname}/src/file-system/${origin}`,
    options,
    (err) => {
      if (err) {
        console.error('[createDirectory]', err);
        throw err;
      }
      console.info(`[createDirectory] Folder ${origin} created.`);
    },
  );
};
createDirectory('test-mkdir/folder-a');
createDirectory('test-mkdir/folder-b/recuersive', { recursive: true });

/**
 * Create a directory with mkdirSync and with recursive option.
 */
const createDirectorySync = (origin, options = {}) => {
  try {
    fs.mkdirSync(`${__dirname}/src/file-system/${origin}`, options);
    console.info(`[createDirectorySync] Folder ${origin} created.`);
  } catch (err) {
    console.error('[createDirectorySync]', err);
  }
};
createDirectorySync('test-mkdir/folder-a-sync');
createDirectorySync('test-mkdir/folder-b-sync/recursive', { recursive: true });
