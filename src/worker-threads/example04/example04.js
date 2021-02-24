/* eslint-disable no-new */
/**
 * Description: Create ten Worker and send messages to
 *              parent with finish setTimeout with random time.
 */

/** Import generics dependences */
import { Worker } from 'worker_threads';
import path from 'path';

const __dirname = path.resolve();

// Array to save workers;
const workers = [];

// Iterate and create new workers.
for (let i = 0; i <= 9; i += 1) {
  workers.push(new Worker(`${__dirname}/src/worker-threads/example04/task.js`));
}

// Active on message event for each Worker.
workers.forEach((worker, index) => {
  worker.on('message', (data) => {
    console.log(`Message from Worker ${index} -> ${data}`);
  });
});
