/**
 * Description: Create REPL and press .help for show all help commands.
 */

/*
  .break    Sometimes you get stuck, this gets you out
  .clear    Break, and also clear the local context
  .editor   Enter editor mode
  .exit     Exit the repl
  .help     Print this help message
  .load     Load JS from a file into the REPL session
  .save     Save all evaluated commands in this REPL session to a file
*/

/** Require generics dependences */
import repl from 'repl';

repl.start({
  prompt: 'Node.js via stdin> ',
  input: process.stdin,
  output: process.stdout,
});
