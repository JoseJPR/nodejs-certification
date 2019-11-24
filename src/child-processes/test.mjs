import { fork } from 'child_process';
import path from 'path';

// const __dirname = path.resolve();

// const n = fork(`${__dirname}/src/child-processes/sub.mjs`);

const forkSync = async () => new Promise((resolve, reject) => {
  try {
    resolve(fork(`${path.resolve()}/src/child-processes/sub.mjs`));
  } catch (e) {
    reject(e);
  }
});

(async () => {
  const n = await forkSync();


  // Causes the child to print: CHILD got message: { hello: 'world' }
  console.log(n);
  n.send({ hello: 'world' });

  n.on('message', (m) => {
    console.log('PARENT got message:', m);
  });
})();
