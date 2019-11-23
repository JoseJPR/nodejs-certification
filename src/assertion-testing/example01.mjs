/**
 * Description: Equal numbers or not with assert.strictEqual method.
 */

/** Import generics dependences */
import assert from 'assert';
import 'pretty-console-colors';

console.group('GROUP \n');

// These two numbers are strict equal.
try {
  assert.strictEqual(2, 2);
  console.info('[PASSED] Number 2 is equal 2!');
} catch (err) {
  console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}

// One 2 is type string and the other is type number.
try {
  assert.strictEqual('2', 2);
  console.info('[PASSED] Number 2 is equal 2!');
} catch (err) {
  console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}

// These two numbers are diferents.
try {
  assert.strictEqual(3, 2);
  console.info('[PASSED] Number 3 is equal 2!');
} catch (err) {
  console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}

console.groupEnd();
