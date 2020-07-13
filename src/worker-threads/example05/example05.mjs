/* eslint-disable no-new */
/**
 * Description: Create Worker when update the content of
 *              local json file for change it and save into other file.
 */

/** Import generics dependences */
import { Worker } from 'worker_threads';
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

// Watch if the json file change the content.
fs.watch(`${__dirname}/src/worker-threads/example05/data.json`, { encoding: 'buffer' }, (eventType) => {
  if (eventType === 'change') {
    // For save worker;
    const worker = new Worker(`${__dirname}/src/worker-threads/example05/task.mjs`);
    worker.postMessage({
      origin: `${__dirname}/src/worker-threads/example05/data.json`,
      destination: `${__dirname}/src/worker-threads/example05/new.json`,
    });
    // Active on message event for each Worker.
    worker.on('message', (data) => {
      console.log(`Message from Worker ${data}`);
    });
  }
});
