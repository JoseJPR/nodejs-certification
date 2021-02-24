/**
 * Description: Get folder content with Callback, Sync and Promises.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

const contentFolder = (pathName) => {
  fs.readdir(`${__dirname}/src/file-system/${pathName}`, (err, content) => {
    if (err) throw err;
    console.log('[contentFolder]', content);
  });
};

contentFolder('test');

const contentFolderSync = (pathName) => {
  try {
    const content = fs.readdirSync(`${__dirname}/src/file-system/${pathName}`);
    console.log('[contentFolderSync] content', content);
  } catch (err) {
    console.error('[contentFolderSync] err', err);
  } finally {
    console.info('[contentFolderSync] finish');
  }
};

contentFolderSync('test');

const contentFolderPromise = async (pathName) => {
  try {
    const content = await fs.promises.readdir(`${__dirname}/src/file-system/${pathName}`);
    console.log('[contentFolderPromise] content', content);
  } catch (err) {
    console.error('[contentFolderPromise] err', err);
  } finally {
    console.info('[contentFolderPromise] finish');
  }
};

contentFolderPromise('test');
