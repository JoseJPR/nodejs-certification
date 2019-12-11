/**
 * Description: Remove event with removeListener.
 */

/** Import generics dependences */
import EventEmitter from 'events';
import 'pretty-console-colors';

// Define Event once.
const myEmitterOnce = new EventEmitter();
myEmitterOnce.once('event', () => {
  console.log('[myEmitterOnce] An Event occurred!');
});

// Emit event
myEmitterOnce.emit('event');

// Remove event
myEmitterOnce.removeListener('event', () => {
  console.info('[myEmitterOnce] An Event removed!');
});

// Try emit again, with fail :)
myEmitterOnce.emit('event');
