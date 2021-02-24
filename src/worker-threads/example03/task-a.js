/** Import generics dependences */
import { isMainThread, parentPort } from 'worker_threads';

if (!isMainThread) {
  console.log('Worker A');
}
console.log('Task A');
console.log(`Task A Process: ${process.pid}`);

setTimeout(() => {
  // Send message to parent.
  parentPort.postMessage('Hi from Worker A');
}, 5000);
