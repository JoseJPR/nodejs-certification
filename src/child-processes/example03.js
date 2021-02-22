/**
 * Description: spawn and spawnSync functions with custom sh file.
 */

/** Import generics dependences */
import { spawn, spawnSync } from 'child_process';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

// Launch spawnSync function to execute sh file.
const fncSpawnSync = () => {
  console.time('[fncSpawnSync] sh');
  try {
    const bat = spawnSync('sh', [
      `${__dirname}/src/child-processes/test.sh`,
    ]);
    console.log('[fncSpawnSync] sh stdout > data (buffer)', Buffer.from(bat.stdout).toString());
    console.timeEnd('[fncSpawnSync] sh');
  } catch (err) {
    console.error('[fncSpawnSync] sh stderr > err', err);
    console.timeEnd('[fncSpawnSync] sh');
  }
};
fncSpawnSync();

// Launch spawn function to execute sh file.
const fncSpawn = () => {
  console.time('[fncSpawn] sh');
  const bat = spawn('sh', [
    `${__dirname}/src/child-processes/test.sh`,
  ]);
  bat.stdout.on('data', (data) => {
    console.log('[fncSpawn] sh stdout > data (buffer)', Buffer.from(data).toString());
  });
  bat.stderr.on('data', (data) => {
    console.error('[fncSpawn] sh stderr > data', Buffer.from(data).toString());
  });
  bat.on('exit', () => {
    console.timeEnd('[fncSpawn] sh');
  });
};
fncSpawn();
