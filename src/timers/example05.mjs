/**
 * Description: nextTick with try/catch and not block timeout and immediate.
 */

import fs from 'fs';

console.log('Hi from NodeJS');

setTimeout(() => {
  console.log('timeout');
}, 0);

// Create inmmediate with other inside timers.
setImmediate(() => {
  console.log('immediate');
  setImmediate(() => {
    console.log('immediate inside immediate');
  });
  setTimeout(() => {
    console.log('timeout inside immediate');
  }, 0);
});

// Define nextTick function with fs readFileSync.
process.nextTick(() => {
  console.log('nextTick');
  try {
    // Try read file that not exist.
    fs.readFileSync('noexist.json');
  } catch (err) {
    console.error(err);
  }
});
