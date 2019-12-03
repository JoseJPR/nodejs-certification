/**
 * Description: Differents instances and times.
 */

/** Import generics dependences */
import EventEmitter from 'events';
import 'pretty-console-colors';

// Define Event and launch.
const myEmitterA = new EventEmitter();
myEmitterA.on('event', () => {
  console.log('[launchEventA] an event occurred!');
});
const launchEventA = () => {
  myEmitterA.emit('event');
};
launchEventA();

// Define Event wait 1 second and lanuch.
const myEmitterB = new EventEmitter();
myEmitterB.on('event', () => {
  console.log('[launchEventB] an event occurred!');
});
const launchEventB = () => {
  myEmitterB.emit('event');
};
setTimeout(() => {
  launchEventB();
}, 1000);
