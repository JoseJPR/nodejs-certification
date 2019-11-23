/**
 * Description: exec and execSync functions.
 */

/** Import generics dependences */
import { exec, execSync } from 'child_process';
import 'pretty-console-colors';

// Launch exec function to return folder and file list.
const fncExec = () => {
  exec('ls', (error, stdout, stderr) => {
    if (error) {
      console.info('[fncExec] stderr', stderr);
      console.error('[fncExec] error', error);
      return;
    }
    console.log('[fncExec] stdout', stdout);
  });
};
fncExec();

// Launch execSync function to return buffer.
const fncExecSync = () => {
  const bat = execSync('ls');
  console.log('[fncExecSync]', bat);
};
fncExecSync();

/**
 * Launch execSync function to return fncExecSync and transform
 * to string for show folder and file list.
 */
const fncExecSyncBufferToString = () => {
  const bat = execSync('ls');
  console.log('[fncExecSync] (buffer to string)', Buffer.from(bat).toString());
};
fncExecSyncBufferToString();
