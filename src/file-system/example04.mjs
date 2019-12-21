/**
 * Description: Open folder and file details with opendirSync and openSync functions.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

const detailsFolder = (pathName) => {
  const details = fs.opendirSync(`${__dirname}/src/file-system/${pathName}`);
  console.log('[detailsFolder] details', details);
};

detailsFolder('test');

const detailsFile = (pathName) => {
  const details = fs.openSync(`${__dirname}/src/file-system/${pathName}`);
  console.log('[detailsFile] details', details);
};

detailsFile('test/file1.txt');
