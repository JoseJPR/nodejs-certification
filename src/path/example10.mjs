/**
 * Description: Use sep method for generate array with split and resolve a structure with folders and files.
 */

/** Require generics dependences */
import path from 'path';
import fs from 'fs';

import 'pretty-console-colors';

const __dirname = path.resolve();

const directoryA = path.dirname(`${__dirname}/src/test/`);
console.log(directoryA.split(path.sep));

const directoryB = path.dirname('/src/test/');
console.log(directoryB.split(path.sep));

const files = fs.readdirSync(`${__dirname}/src/path/test`);
files.forEach((file) => {
  console.log(`${__dirname}/src/test/${file}`.split(path.sep));
});
