/**
 * Description: Use multipleResolves event with Promise.race() method returns
 * a promise that fulfills or rejects as soon as one of the promises.
 */

/** Require generics dependences */
import 'pretty-console-colors';

process.on('multipleResolves', (type, promise, reason) => {
  console.error(type, promise, reason);
  setImmediate(() => process.exit(1));
});

const promise1Race = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'promise1Race one');
});

const promise2Race = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'promise2Race two');
});

/**
 * The Promise.race() method returns a promise that fulfills
 * or rejects as soon as one of the promises in an iterable fulfills
 * or rejects, with the value or reason from that promise.
 */
Promise.race([promise1Race, promise2Race]).then((value) => {
  console.log('Promise.race | value ->', value);
  // Both resolve, but promise2 is faster
});
