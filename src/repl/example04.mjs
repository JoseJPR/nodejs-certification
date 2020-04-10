/**
 * Description: Create "replServer" and use defineCommand for include Specific Commands.
  1.- Write .sayhi (and your name).
  2.- Write .saybye
  3.- Write .say and press twice TAB for see severals options.
 */

/** Require generics dependences */
import repl from 'repl';

const replServer = repl.start({
  prompt: 'Node.js via stdin> ',
  input: process.stdin,
  output: process.stdout,
});

replServer.defineCommand('sayhi', {
  help: 'Say Hi :)',
  action(firstname) {
    this.clearBufferedCommand();
    console.log(`Hi, ${firstname}!`);
    this.displayPrompt();
  },
});

replServer.defineCommand('saybye', function saybye() {
  console.log('Goodbye!');
  this.close();
});
