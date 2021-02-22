/**
 * Description: child process of fork function.
 */

/** Import generics dependences */
import { spawnSync } from 'child_process';
import 'pretty-console-colors';

// Launch spawnSync function to execute sh file.
const fncSpawnSync = () => {
  console.time('[fncSpawnSync SUB02] ls');
  try {
    // Define spawn task.
    const bat = spawnSync('ls');
    console.log('[fncSpawnSync SUB02] ls stdout > data (buffer)', Buffer.from(bat.stdout).toString());
    // Send to parent result.
    process.send({ result: Buffer.from(bat.stdout).toString() });
  } catch (err) {
    console.error('[fncSpawnSync SUB02] ls stderr > err', err);
    // Send to parent error.
    process.send({ error: err });
  }
  console.timeEnd('[fncSpawnSync SUB02] ls');
};

process.on('message', (m) => {
  console.log('CHILD SUB02 got message:', m);
  // Launch spawn function when we recive a message by parent.
  fncSpawnSync();
});
