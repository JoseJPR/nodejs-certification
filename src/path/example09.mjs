/**
 * Description: Use relative method for compare two path and get an absolute path.
 */

/** Require generics dependences */
import path from 'path';
import fs from 'fs';

import 'pretty-console-colors';

const __dirname = path.resolve();

const directory = path.dirname(`${__dirname}/src/test/`);

const filesA = fs.readdirSync(`${__dirname}/src/path/test`);
filesA.forEach((file) => {
  console.log(path.relative(directory, `${__dirname}/src/test/${file}`));
  // Return:
  // test/file.ico
  // test/file1.txt
  // test/file3.md
});

const filesB = fs.readdirSync(`${__dirname}/src/path/test`);
filesB.forEach((file) => {
  console.log(path.relative(directory, `${__dirname}/src/test/${file}`));
  // Return:
  // ../../../../../../src/test/file.ico
  // ../../../../../../src/test/file1.txt
  // ../../../../../../src/test/file3.md
});
