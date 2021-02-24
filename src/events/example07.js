/**
 * Description: Set Max Listeners to event with setMaxListeners..
 */

/** Import generics dependences */
import EventEmitter from 'events';
import 'pretty-console-colors';

// Define Event once.
const myEmitterOnce = new EventEmitter();

// Set max listeners to 2
myEmitterOnce.setMaxListeners(2);

// Create listener 1
myEmitterOnce.on('event', () => {
  console.log('[myEmitterOnce] - Listener 1 An Event occurred!');
});

// Create listener 2
myEmitterOnce.on('event', () => {
  console.log('[myEmitterOnce] - Listener 2 An Event occurred!');
});

// Emit event
myEmitterOnce.emit('event');

// Create listener 3 with fail. :)
setTimeout(() => {
  myEmitterOnce.on('event', () => {
    console.log('[myEmitterOnce] - Listener 3 An Event occurred!');
  });
}, 1000);
