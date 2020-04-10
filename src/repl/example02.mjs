/**
 * Description: Create and press twice ^C again or ^D or type .exit.
 */

/** Require generics dependences */
import repl from 'repl';

repl.start({
  prompt: 'Node.js via stdin> ',
  input: process.stdin,
  output: process.stdout,
});
