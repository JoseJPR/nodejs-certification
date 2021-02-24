/**
 * Description: Use basename for get all internal files from folder and get basename of files.
 */

/** Require generics dependences */
import path from 'path';
import fs from 'fs';
import 'pretty-console-colors';

const __dirname = path.resolve();

console.log(__dirname);
const files = fs.readdirSync(`${__dirname}/src/path/test`);
files.forEach((file) => {
  console.log(path.basename(`${__dirname}/src/test/${file}`)); // Return: file.ico file1.txt file3.md
});
