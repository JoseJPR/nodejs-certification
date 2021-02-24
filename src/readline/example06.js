/**
 * Description: Use keypress, keyup and keydown for get "process.stdin" events.
 */

/** Require generics dependences */
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(rl.getCursorPos());

rl.question('What is your favorite food?', (answer) => {
  console.log(`Oh, so your favorite food is ${answer}`);
});

rl.on('close', () => {
  console.log('Done reading file');
});

rl.on('SIGINT', () => {
  console.log('Event SIGINT.');
  rl.question('Are you sure you want to exit? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});

process.stdin.on('keypress', (s, key) => {
  console.log('keypress', s, key);
});

process.stdin.on('keyup', (s, key) => {
  console.log('keyup', s, key);
});

process.stdin.on('keydown', (s, key) => {
  console.log('keyup', s, key);
});
