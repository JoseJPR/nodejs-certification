/**
 * Description: Get Basename of current or specific folder.
 */

/** Require generics dependences */
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

// Show all path current folder project
console.log(__dirname);

// Show only current folder project
console.log(path.basename(__dirname)); // return -> nodejs-certification

console.log(path.basename(`${__dirname}/src/path/test`)); // return -> test
