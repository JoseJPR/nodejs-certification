/**
 * Description: Remove folders with rmdir and rmdirSync functions with recursive option.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

// Declare remove folder function for create and remove folder.
const removeFolder = (folderName) => {
  // Create folder.
  fs.mkdir(`${__dirname}/src/file-system/${folderName}`, (errMkdir) => {
    if (errMkdir) {
      console.error(errMkdir);
      throw errMkdir;
    }
    console.info(`[removeFolder] Folder ${__dirname}/src/file-system/${folderName} created.`);

    // Remove folder.
    fs.rmdir(`${__dirname}/src/file-system/${folderName}`, (errRmdir) => {
      if (errRmdir) {
        console.error(errRmdir);
        throw errRmdir;
      }
      console.info(`[removeFolder] Folder ${__dirname}/src/file-system/${folderName} removed.`);
    });
  });
};
removeFolder('test-folder-remove');

// Declare remove folder function for create and remove folder with sync option.
const removeFolderSync = (folderName) => {
  try {
    // Create folder.
    fs.mkdirSync(`${__dirname}/src/file-system/${folderName}`);

    // Remove folder.
    fs.rmdirSync(`${__dirname}/src/file-system/${folderName}`);
    console.info(`[renameSync] Folder ${__dirname}/src/file-system/${folderName} created and removed.`);
  } catch (err) {
    console.error('[removeFolderSync]', err);
  }
};
removeFolderSync('test-folder-remove-sync');

// Declare remove folder function for create and remove folder with sync option.
const removeFolderRecursiveSync = (folderName) => {
  try {
    // Create folder.
    fs.mkdirSync(`${__dirname}/src/file-system/${folderName}`);

    // Create 9 new folders into main.
    for (let i = 0; i < 10; i += 1) {
      fs.mkdirSync(`${__dirname}/src/file-system/${folderName}/folder-${i}`);
    }

    // Remove folder.
    fs.rmdirSync(`${__dirname}/src/file-system/${folderName}`, { recursive: true });
    console.info(`[removeFolderRecursiveSync] Folder ${__dirname}/src/file-system/${folderName} created and removed.`);
  } catch (err) {
    console.error('[removeFolderRecursiveSync]', err);
  }
};
removeFolderRecursiveSync('test-folder-remove-sync-recursive');
