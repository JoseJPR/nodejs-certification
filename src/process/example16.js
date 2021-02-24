/**
 * Description: process.nextTick() adds callback to the "next tick queue".
 */

/** Require generics dependences */
import 'pretty-console-colors';

console.log('start');

setTimeout(() => {
  console.log('setTimeout callback');
}, 0);

process.nextTick(() => {
  console.log('nextTick A callback');
});

process.nextTick(() => {
  console.log('nextTick B callback');

  process.nextTick(() => {
    console.log('nextTick C callback');
  });
});

console.log('scheduled');

/**
 * start
 * scheduled
 * nextTick A callback
 * nextTick B callback
 * nextTick C callback
 * setTimeout callback
 */
