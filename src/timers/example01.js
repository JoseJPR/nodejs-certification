/**
 * Description: timeout vs immediate.
 */

console.log('Hi from NodeJS');

setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});
