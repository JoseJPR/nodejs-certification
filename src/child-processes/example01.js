/**
 * Description: spawn function.
 */

/** Import generics dependences */
import { spawn } from 'child_process';
import 'pretty-console-colors';

// Launch spawn function and get buffer result.
const fncSpawn = () => {
  const bat = spawn('ls');

  bat.stdout.on('data', (data) => {
    console.log('[fncSpawn] stdout > data (buffer)', data);
  });

  bat.stderr.on('data', (data) => {
    console.error('[fncSpawn] stderr > data', data);
  });

  bat.on('exit', (code) => {
    console.info(`[fncSpawn] Child exited with code ${code}`);
  });
};
fncSpawn();

// Launch spawn function and get buffer to transform to string to show folders and files list.
const fncSpawnBufferString = () => {
  const bat = spawn('ls');

  bat.stdout.on('data', (data) => {
    console.log('[fncSpawnBufferString] stdout > data (buffer to string)', Buffer.from(data).toString());
  });

  bat.stderr.on('data', (data) => {
    console.error('[fncSpawnBufferString] stderr > data', data);
  });

  bat.on('exit', (code) => {
    console.info(`[fncSpawnBufferString] Child exited with code ${code}`);
  });
};
fncSpawnBufferString();
