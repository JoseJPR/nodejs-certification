/**
 * Description: Timer and timerify wrapper for Get all files from
 * specific folder with function with callback.
 */

/** Require generics dependences */
import { PerformanceObserver, performance } from 'perf_hooks';
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

function getAllFiles() {
  const files = fs.readdirSync(`${__dirname}/src`);
  files.forEach((file) => {
    console.log(path.resolve(`${__dirname}/src/${file}`));
  });
  console.log('getAllFiles Done!');
}

const wrapped = performance.timerify(getAllFiles);

const obs = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`Function: ${entry.name}`, entry.duration);
  });
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'] });

wrapped();
