/**
 * Description: Use extname for get extension of file name or all path.
 */

/** Require generics dependences */
import path from 'path';
import fs from 'fs';
import 'pretty-console-colors';

const __dirname = path.resolve();

const directory = path.extname(`${__dirname}/src/test/`);
console.log(directory); // (empty because this is a folder not a file) Return:

const files = fs.readdirSync(`${__dirname}/src/path/test`);
files.forEach((file) => {
  console.log(path.extname(`${__dirname}/src/test/${file}`)); // Return: .icon .txt .md
});
