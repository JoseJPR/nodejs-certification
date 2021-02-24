/**
 * Description: timeout, immediate, nextTick and promises inside this with then/catch/finally.
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
const testPromise = (from) => new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve(`${from} resolvered`);
    }, 3000);
  } catch (err) {
    reject(err);
  }
});

setTimeout(() => {
  testPromise('timeout').then((result) => {
    console.log(result);
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    console.log('timeout finally');
  });
});

setImmediate(() => {
  testPromise('immediate').then((result) => {
    console.log(result);
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    console.log('immediate finally');
  });
});

process.nextTick(async () => {
  testPromise('nextTick').then((result) => {
    console.log(result);
  }).catch((err) => {
    console.error('ERROR', err);
  }).finally(() => {
    console.log('nextTick finally');
  });
});
