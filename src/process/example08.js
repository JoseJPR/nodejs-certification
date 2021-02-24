/**
 * Description: The argv property contain all arguments include via CLI.
 */

/** Require generics dependences */
import 'pretty-console-colors';

console.log('Arguments', process.argv);

// You can execute this file and add an argument, for example node example08.mjs one two=client
console.log('Arguments', process.argv);
/**
 * Example console
 * [
    '/usr/user/bin/node',
    '/Users/user/nodejs-certification/src/process/example08.mjs',
    'one',
    'two=client'
  ]
 */
