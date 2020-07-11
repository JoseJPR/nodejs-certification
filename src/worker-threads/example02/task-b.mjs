/** Import generics dependences */
import { isMainThread } from 'worker_threads';

if (!isMainThread) {
  console.log('Worker B');
}
console.log('Task B');
