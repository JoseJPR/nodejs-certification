/**
 * Description: exec and spawn functions with magick tool.
 * For run this example you need install in your pc imagemagick library.
 * https://imagemagick.org/
 */

/** Import generics dependences */
import { exec, spawn } from 'child_process';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

// Launch exec function to convert cat.jpg to png format.
const fncExec = (from, to, options = '') => {
  console.time(`[fncExec] ${to}`);

  exec(`magick "${__dirname}/src/child-processes/${from}" ${options} "${__dirname}/src/child-processes/${to}"`, (error, stdout, stderr) => {
    if (error) {
      console.error('[fncExec] stderr', stderr);
      console.timeEnd(`[fncExec] ${to}`);
      return;
    }
    console.log(`[fncExec] stdout ${to}`, stdout);
    console.timeEnd(`[fncExec] ${to}`);
  });
};
fncExec('cat.jpg', 'cat-exec.png');
fncExec('cat.jpg', 'cat-exec-600x400.png', '-resize 600x400');

// Launch spawn function to convert cat.jpg to png format.
const fncSpawn = (from, to, options = '') => {
  console.time(`[fncSpawn] ${to}`);

  let optionsDefine;
  if (options !== '') {
    optionsDefine = [
      `${__dirname}/src/child-processes/${from}`,
      options.split(' ')[0],
      options.split(' ')[1],
      `${__dirname}/src/child-processes/${to}`,
    ];
  } else {
    optionsDefine = [
      `${__dirname}/src/child-processes/${from}`,
      `${__dirname}/src/child-processes/${to}`,
    ];
  }

  const bat = spawn('magick', optionsDefine);

  bat.stdout.on('data', (data) => {
    console.log(`[fncSpawn] stdout > data (buffer) > ${to}`, Buffer.from(data).toString());
  });

  bat.stderr.on('data', (data) => {
    console.error('[fncSpawn] stderr > data', Buffer.from(data).toString());
  });

  bat.on('exit', (code) => {
    console.info(`[fncSpawn] Child exited with code ${code}, to ${to}`);
    console.timeEnd(`[fncSpawn] ${to}`);
  });
};
fncSpawn('cat.jpg', 'cat-spawn.png');
fncSpawn('cat.jpg', 'cat-spawn-600x400.png', '-resize 600x400');
