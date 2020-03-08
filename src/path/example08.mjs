/**
 * Description: Use parse method for get object with all properties of paths.
 */

/** Require generics dependences */
import path from 'path';
import fs from 'fs';

import 'pretty-console-colors';

const __dirname = path.resolve();

const directory = path.parse(`${__dirname}/src/test/`);
console.log(directory);

const files = fs.readdirSync(`${__dirname}/src/path/test`);
files.forEach((file) => {
  console.log(path.parse(`${__dirname}/src/test/${file}`));
});
