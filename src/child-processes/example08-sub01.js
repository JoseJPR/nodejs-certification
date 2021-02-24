/**
 * Description: child process of fork function.
 */

/** Import generics dependences */
import { spawnSync } from 'child_process';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

// Launch spawnSync function to execute sh file.
const fncSpawnSync = () => {
  console.time('[fncSpawnSync SUB01] sh');
  try {
    // Define spawn task.
    const bat = spawnSync('sh', [
      `${__dirname}/src/child-processes/test.sh`,
    ]);
    console.log('[fncSpawnSync SUB01] sh stdout > data (buffer)', Buffer.from(bat.stdout).toString());
    // Send to parent result.
    process.send({ result: Buffer.from(bat.stdout).toString() });
  } catch (err) {
    console.error('[fncSpawnSync SUB01] sh stderr > err', err);
    // Send to parent error.
    process.send({ error: err });
  }
  console.timeEnd('[fncSpawnSync SUB01] sh');
};

process.on('message', (m) => {
  console.log('CHILD SUB01 got message:', m);
  // Launch spawn function when we recive a message by parent.
  fncSpawnSync();
});
