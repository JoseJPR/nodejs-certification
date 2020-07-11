/* eslint-disable no-new */
/**
 * Description: Create Worker with the same file.
 */

/** Import generics dependences */
import { Worker, isMainThread } from 'worker_threads';
import path from 'path';

const __dirname = path.resolve();

if (isMainThread) {
  // This re-loads the current file inside a Worker instance.
  new Worker(`${__dirname}/src/worker-threads/example01.mjs`);
} else {
  console.log('Inside Worker!');
  console.log(isMainThread); // Prints 'false'.
}