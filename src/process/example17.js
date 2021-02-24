/**
 * Description: pid, platform, ppid, release props for get additional data
 *              of process and NodeJS release.
 */

/** Require generics dependences */
import 'pretty-console-colors';

console.log(`pid: ${process.pid}`);
console.log(`platform: ${process.platform}`);
console.log(`ppid: ${process.ppid}`);
console.log(`release: ${JSON.stringify(process.release)}`);
