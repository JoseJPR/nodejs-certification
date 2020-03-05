/**
 * Description: Get Basename of internal folder.
 */

/** Require generics dependences */
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

console.log(__dirname);
console.log(path.basename(`${__dirname}/src/path/test`)); // return -> test
