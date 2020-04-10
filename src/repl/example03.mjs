/**
 * Description: Run REPL, create a function and execute it.
  1.- Write .editor and write a new function.
      const f = () => {
        console.log('hi from repl');
      }
  2.- Exit press twice ^C
  3.- Execute f()
 */

/** Require generics dependences */
import repl from 'repl';

repl.start({
  prompt: 'Node.js via stdin> ',
  input: process.stdin,
  output: process.stdout,
});
