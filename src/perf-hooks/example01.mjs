/**
 * Description: TODO.
 */

/** Require generics dependences */
import { PerformanceObserver, performance } from 'perf_hooks';
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

const getAllFiles = (done) => {
  performance.mark('getAllFiles init');
  const files = fs.readdirSync(`${__dirname}/src/path/test`);
  files.forEach((file) => {
    console.log(path.resolve(`${__dirname}/src/test/${file}`));
  });
  performance.mark('getAllFiles end');
  performance.measure('getAllFiles', 'getAllFiles init', 'getAllFiles end');
  done();
};

const obs = new PerformanceObserver((list) => {
  const entry = list.getEntries()[0];
  console.log(`Function: ${entry.name}`, entry.duration);
  obs.disconnect();
});
obs.observe({ entryTypes: ['measure'], buffered: false });

getAllFiles(() => {
  console.log('getAllFiles Done!');
});
