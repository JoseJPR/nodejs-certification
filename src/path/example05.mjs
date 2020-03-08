/**
 * Description: Get if any path is absolute.
 */

/** Require generics dependences */
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

const directoryA = path.isAbsolute(`${__dirname}/src/test/`);
console.log(directoryA); // Return: true

const directoryB = path.isAbsolute('/src/test/');
console.log(directoryB); // Return: true

const directoryC = path.isAbsolute('src/test/');
console.log(directoryC); // Return: false
