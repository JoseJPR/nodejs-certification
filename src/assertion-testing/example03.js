/**
 * Description: Equal arrays values and structure or not with strict.deepEqual method.
 */

/** Import generics dependences */
import { strict } from 'assert';
import 'pretty-console-colors';

console.group('GROUP \n');

// These arrays contains equals values and structure.
try {
  strict.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, 3]], 4, 5]);
  console.info('[PASSED] Arrays are equals!');
} catch (err) {
  console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}

// These arrays NO contains equals values, '3' is string.
try {
  strict.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
  console.info('[PASSED] Arrays are equals!');
} catch (err) {
  console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}

// These arrays NO contains equals values and equal structure.
try {
  strict.deepEqual([[[11, 2, 3]], 4, 5], [[[1, 2, 3]], 4]);
  console.info('[PASSED] Arrays are equals!');
} catch (err) {
  console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}

console.groupEnd();
