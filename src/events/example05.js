/**
 * Description: Handling events only once.
 */

/** Import generics dependences */
import EventEmitter from 'events';
import 'pretty-console-colors';

// Define Event once.
const myEmitterOnce = new EventEmitter();
myEmitterOnce.once('event', (i) => {
  console.log(`[myEmitterOnce] ${i} an event occurred!`);
});

myEmitterOnce.emit('event', '1');
myEmitterOnce.emit('event', '2');

// Define Event on.
const myEmitterOn = new EventEmitter();
myEmitterOn.on('event', (i) => {
  console.log(`[myEmitterOn] ${i} an event occurred!`);
});

myEmitterOn.emit('event', '1');
myEmitterOn.emit('event', '2');
