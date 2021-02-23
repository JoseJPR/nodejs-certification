/**
 * Description: Timer and measure for Get all files from specific folders in a function with callback.
 */

/** Require generics dependences */
import { PerformanceObserver, performance } from 'perf_hooks';
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

const getAllFiles = (folder, done) => {
  performance.mark(`getAllFiles init ${folder}`);
  const files = fs.readdirSync(`${__dirname}${folder}`);
  files.forEach((file) => {
    console.log(file);
  });
  performance.mark(`getAllFiles end ${folder}`);
  performance.measure(`getAllFiles ${folder}`, `getAllFiles init ${folder}`, `getAllFiles end ${folder}`);
  done();
};

const obs = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`Function: ${entry.name}`, entry.duration);
  });
});
obs.observe({ entryTypes: ['measure'], buffered: false });

getAllFiles('/src/path/test', () => {
  console.log('getAllFiles Done!');
});

getAllFiles('/src', () => {
  console.log('getAllFiles Done!');
});
