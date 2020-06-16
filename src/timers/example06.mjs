/**
 * Description: timeout, immediate, nextTick and promises inside this.
 */
console.log('Hi from NodeJS');

setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
}, 0);

process.nextTick(() => {
  console.log('nextTick');
});

// Define promise example.
const testPromise = (from) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(`Promise resolvered ${from}`);
  }, 3000);
});

setTimeout(async () => {
  try {
    console.log(await testPromise('timeout'));
  } catch (err) {
    console.error('ERROR', err);
  }
});

setImmediate(async () => {
  try {
    console.log(await testPromise('immediate'));
  } catch (err) {
    console.error('ERROR', err);
  }
});

process.nextTick(async () => {
  try {
    console.log(await testPromise('nextTick'));
  } catch (err) {
    console.error('ERROR', err);
  }
});
