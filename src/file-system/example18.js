/**
 * Description: Create temp directories with mkdtemp and mkdtempSync.
 */

/** Import generics dependences */
import fs from 'fs';
import os from 'os';
import path from 'path';
import 'pretty-console-colors';

// Get temp operative system foler.
const tmpDir = os.tmpdir();

/**
 * Create a temporal directory with mkdTemp.
 */
const createTempDirectory = () => {
  // Create temporal folder.
  fs.mkdtemp(
    `${tmpDir}${path.sep}`,
    (err, folder) => {
      if (err) {
        console.error('[createTempDirectory]', err);
        throw err;
      }
      console.info(`[createTempDirectory] Folder ${folder} created.`);
    },
  );
};
createTempDirectory();

/**
 * Create a temporal directory with mkdtempSync.
 */
const createTempDirectorySync = () => {
  try {
    // Create temporal folder.
    const result = fs.mkdtempSync(`${tmpDir}${path.sep}`);
    console.info(`[createTempDirectorySync] Folder ${result} created.`);
  } catch (err) {
    console.error('[createTempDirectorySync]', err);
  }
};
createTempDirectorySync();
