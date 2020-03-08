/**
 * Description: Use normalize method for create corrects paths.
 */

/** Require generics dependences */
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

const directoryA = path.normalize(`${__dirname}/src/test/`);
console.log(directoryA); // Return: .../nodejs-certification/src/test/

const directoryB = path.normalize('/src//test/');
console.log(directoryB); // Return: /src/test/

const directoryC = path.normalize('src/test////');
console.log(directoryC); // Return: src/test/

const directoryD = path.normalize('src/////test/.');
console.log(directoryD); // Return: src/test
