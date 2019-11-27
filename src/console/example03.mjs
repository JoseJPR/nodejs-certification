/**
 * Description: Show and get log and save into .log files (out and error files).
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

// Define stdout and stderr log files.
const output = fs.createWriteStream(`${__dirname}/src/console/stdout.log`);
const errorOutput = fs.createWriteStream(`${__dirname}/src/console/stderr.log`);

// Instance Console class and include stdout and stderr preferences.
const myConsole = new console.Console({ stdout: output, stderr: errorOutput });

myConsole.log('hello world');
myConsole.log('hello %s', 'world');
myConsole.error(new Error('Whoops, something bad happened'));

const name = 'Will Robinson';
myConsole.warn(`Danger ${name}! Danger!`);
