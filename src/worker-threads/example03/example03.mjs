/* eslint-disable no-new */
/**
 * Description: Create two Worker and send messages with parent.
 */

/** Import generics dependences */
import { Worker } from 'worker_threads';
import path from 'path';

const __dirname = path.resolve();

// Define two Workers with differents files.
const workerA = new Worker(`${__dirname}/src/worker-threads/example03/task-a.mjs`);
const workerB = new Worker(`${__dirname}/src/worker-threads/example03/task-b.mjs`);

// Active on message event for Worker A;
workerA.on('message', (data) => {
  console.log(`Message from workerA -> ${data}`);
});

// Active on message event for Worker B;
workerB.on('message', (data) => {
  console.log(`Message from workerB -> ${data}`);
});
