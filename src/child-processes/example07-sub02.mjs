/**
 * Description: child process of fork function.
 */

/** Import generics dependences */
import 'pretty-console-colors';

process.on('message', (m) => {
  console.log('CHILD SUB02 got message:', m);
});

// Causes the parent to print: PARENT got message: { foo: 'bar', baz: 'SUB02' }
process.send({ foo: 'bar', baz: 'SUB02' });
