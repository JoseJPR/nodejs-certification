/**
 * Description: timeout, immediate, nextTick and promises inside this with try/catch/finally.
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

setTimeout(async () => {
  try {
    console.log(await testPromise('timeout'));
  } catch (err) {
    console.error(err);
  } finally {
    console.log('timeout finally');
  }
});

setImmediate(async () => {
  try {
    console.log(await testPromise('immediate'));
  } catch (err) {
    console.error(err);
  } finally {
    console.log('immediate finally');
  }
});

process.nextTick(async () => {
  try {
    console.log(await testPromise('nextTick'));
  } catch (err) {
    console.error(err);
  } finally {
    console.log('nextTick finally');
  }
});
