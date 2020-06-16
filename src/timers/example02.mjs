/**
 * Description: timeout vs immediate with inside timers.
 */

console.log('Hi from NodeJS');

setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
  setImmediate(() => {
    console.log('immediate into immediate');
  });
  setTimeout(() => {
    console.log('timeout into immediate');
  }, 0);
});
