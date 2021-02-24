/**
 * Description: Get content for show from txt file for create interface.
 */

/** Require generics dependences */
import fs from 'fs';
import path from 'path';
import readline from 'readline';

const __dirname = path.resolve();

const rl = readline.createInterface({
  input: fs.createReadStream(`${__dirname}/src/readline/text.txt`),
  output: process.stdout,
});

rl.on('close', () => {
  console.log('Done reading file');
});
