/**
 * Description: Work with Readline and Write Stream to save line by line.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import readline from 'readline';

const __dirname = path.resolve();

const file = fs.createWriteStream(`${__dirname}/src/stream/example16/destination-text.txt`);

file.on('finish', () => {
  console.log('Event finish');
});

// Create date for include line by line.
const getDate = () => new Date().toISOString();

// Launch Interface
const rl = readline.createInterface({
  input: process.stdin,
});

rl.prompt();

// If you write in prompt and push enter you can see this log.
rl.on('line', (input) => {
  const d = getDate();
  // Write via Stream into destination file.
  file.write(`${d} | ${input}\n`);
});
