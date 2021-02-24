/**
 * Description: TODO.
 */

/** Require generics dependences */
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let actualCursorPosition = 0;

const options = [
  ' 🍺',
  ' 🍺🍺',
  ' 🍺🍺🍺',
  ' 🍺 x 💯😂',
];
rl.question(`What would you like to drink?\n${options.join('\n')}\n`, () => {
  readline.moveCursor(
    process.stdout,
    0,
    +1,
  );
  console.log(`Ok, very good selection!${options[actualCursorPosition]}`);
});

readline.moveCursor(
  process.stdout,
  0,
  -4,
);

rl.on('close', () => {
  console.log('Done reading file');
});

// Use "process.stdin" events to get more interactions.
process.stdin.on('keypress', (s, key) => {
  switch (key.name) {
    case 'up':
      if (actualCursorPosition > 0) {
        readline.moveCursor(process.stdout, 0, -1);
        actualCursorPosition -= 1;
      }
      break;
    case 'down':
      if (actualCursorPosition < 3) {
        readline.moveCursor(process.stdout, 0, +1);
        actualCursorPosition += 1;
      }
      break;
    default:
      break;
  }
});
