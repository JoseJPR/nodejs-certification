/**
 * Description: Use joins method for concat all string for create a correct path.
 */

/** Require generics dependences */
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

const directoryA = path.join(`${__dirname}/src/test/`);
console.log(directoryA); // Return: .../nodejs-certification/src/test/

const directoryB = path.join('/src', 'test/');
console.log(directoryB); // Return: /src/test/

const directoryC = path.join('src/', 'test/');
console.log(directoryC); // Return: src/test/

const directoryD = path.join('src/', 'test/', '');
console.log(directoryD); // Return: src/test/

const directoryE = path.join('..', 'src/', 'test/', '.');
console.log(directoryE); // Return: ../src/test
