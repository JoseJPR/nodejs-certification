/**
 * Description: timeout vs severals immediate.
 */

console.log('Hi from NodeJS');

setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate A');
});

setImmediate(() => {
  console.log('immediate B');
});
