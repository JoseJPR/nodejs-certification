/**
 * Description: exec and spawn functions with custom sh file.
 */

/** Import generics dependences */
import { exec, spawn } from 'child_process';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

// Launch exec function to execute sh file.
const fncExec = () => {
  console.time('[fncExec] sh');
  exec(`sh ${__dirname}/src/child-processes/test.sh`, (error, stdout, stderr) => {
    if (error) {
      console.error('[fncExec] sh stderr', stderr);
      console.timeEnd('[fncExec] sh');
      return;
    }
    console.log('[fncExec] sh stdout', stdout);
    console.timeEnd('[fncExec] sh');
  });
};
fncExec();

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
