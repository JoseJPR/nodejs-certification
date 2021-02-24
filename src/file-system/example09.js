/**
 * Description: Access function for get if file exist or not.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

const getAccess = (pathName) => {
  fs.access(`${__dirname}/src/file-system/${pathName}`, fs.constants.F_OK, (e) => {
    if (e) {
      console.error('[getAccess]', e);
      return;
    }
    console.info('[getAccess]', `File or directory ${pathName} found.`);
  });
};

// File "access.log" exist.
getAccess('test-access/access.log');

// File "access-a.log" no exist.
getAccess('test-access/access-a.log');

const getAccessSync = (pathName) => {
  try {
    fs.accessSync(`${__dirname}/src/file-system/${pathName}`, fs.constants.F_OK);
    console.info('[getAccessSync]', `File or directory ${pathName} found.`);
  } catch (e) {
    console.error('[getAccessSync]', e);
  }
};

// File "access.log" exist.
getAccessSync('test-access/access.log');

// File "access-a.log" no exist.
getAccessSync('test-access/access-a.log');
