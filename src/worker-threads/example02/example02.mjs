/* eslint-disable no-new */
/**
 * Description: Create Worker with differents files for create two parallels tasks.
 */

/** Import generics dependences */
import { Worker } from 'worker_threads';
import path from 'path';

const __dirname = path.resolve();

const workerA = new Worker(`${__dirname}/src/worker-threads/example02/task-a.mjs`);
const workerB = new Worker(`${__dirname}/src/worker-threads/example02/task-b.mjs`);
console.log(workerA);
console.log(workerB);
