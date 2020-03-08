/**
 * Description: Use dirname for get the main folder and all internal files.
 */

/** Require generics dependences */
import path from 'path';
import fs from 'fs';
import 'pretty-console-colors';

const __dirname = path.resolve();

const directory = path.dirname(`${__dirname}/src/test/`);
console.log(directory); // Return: .../src

const files = fs.readdirSync(`${__dirname}/src/path/test`);
files.forEach((file) => {
  console.log(path.dirname(`${__dirname}/src/test/${file}`)); // Return: .../src/test
});
