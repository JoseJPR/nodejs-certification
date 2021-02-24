/** Import generics dependences */
import { parentPort } from 'worker_threads';

// Define random time for set to setTimeout.
const randomTime = (Math.floor(Math.random() * 100) + 1) * 100;
console.log(`Worker ${randomTime}`);

setTimeout(() => {
  // Send message to parent.
  parentPort.postMessage(`Hi from Worker ${randomTime}`);
}, randomTime);
