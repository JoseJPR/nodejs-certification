/**
 * Description: timeout vs immediate vs nextTick.
 */

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

// Define nextTick function.
process.nextTick(() => {
  console.log('nextTick');
});
