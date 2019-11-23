/**
 * Description: execFile and execFileSync functions.
 */

/** Import generics dependences */
import { execFile, execFileSync } from 'child_process';
import 'pretty-console-colors';

// Launch execFile function to execute node and ls.
const fncExecFile = (app, options = []) => {
  console.time(`[fncExecFile] ${app}`);
  execFile(app, options, (error, stdout, stderr) => {
    if (error) {
      console.error(`[fncExecFile] ${app} stderr`, stderr);
      console.timeEnd(`[fncExecFile] ${app}`);
      return;
    }
    console.log(`[fncExecFile] ${app} stdout`, stdout);
    console.timeEnd(`[fncExecFile] ${app}`);
  });
};
fncExecFile('node', ['-v']);
fncExecFile('ls');

// Launch execFileSync function to execute node and ls.
const fncExecFileSync = (app, options = []) => {
  console.time(`[fncExecFileSync] ${app}`);
  try {
    const bat = execFileSync(app, options);
    console.log(`[fncExecFileSync] ${app} (buffer)`, Buffer.from(bat).toString());
    console.timeEnd(`[fncExecFileSync] ${app}`);
  } catch (err) {
    console.error(err);
    console.timeEnd(`[fncExecFileSync] ${app}`);
  }
};
fncExecFileSync('node', ['-v']);
fncExecFileSync('ls');
