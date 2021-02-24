/**
 * Description: Returns object the resource usage for the current process.
 */

/** Require generics dependences */
import 'pretty-console-colors';

process.on('exit', () => {
  console.log(process.resourceUsage());
});

console.log(process.resourceUsage());
setTimeout(() => {
  console.log('setTimeout');
}, 5000);
