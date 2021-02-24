/** Import generics dependences */
import { isMainThread } from 'worker_threads';

if (!isMainThread) {
  console.log('Worker A');
}
console.log('Task A');
