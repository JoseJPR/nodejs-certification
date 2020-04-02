/**
 * Description: To exit this process you just have to press <ctrl> + C.
 */

/** Require generics dependences */
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('To exit this process you just have to press <ctrl> + C');

// Active prompt and wait any data.
rl.prompt();

// The 'SIGINT' event is emitted whenever the input stream receives a <ctrl>-C input.
rl.on('SIGINT', () => {
  console.log('Event SIGINT.');
  rl.question('Are you sure you want to exit? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});

// The 'SIGTSTP' event is emitted when the input stream receives a <ctrl>-Z input.
rl.on('SIGTSTP', () => {
  console.log('Event SIGTSTP.');
});
