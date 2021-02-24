/**
 * Description: The process.exit() method instructs Node.js to terminate
 *              the process synchronously with an exit status of code.
 */

/** Require generics dependences */
import 'pretty-console-colors';

process.on('exit', (code) => {
  console.log(`Code Process: ${code}`);
});

setTimeout(() => {
  process.exit(0);
}, 1000);

// setTimeout(() => {
//   process.exit(1);
// }, 1000);
