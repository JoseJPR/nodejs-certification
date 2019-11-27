/**
 * Description: Assert, count, countReset.
 */

/**
 * Group of Console Assert
 */

// [Assert] This console not show in termial, only is true.
console.assert(true, 'This is true and not show in terminal :)');

// [Assert] This console show Assertion failed in terminal.
console.assert(false, 'Ups this is false and show in terminal :(');

// [Assert] Comparte numbers equals.
const numberOne = 1;
console.assert(numberOne === 1, 'This is true and not show in terminal :)');

// [Assert] Comparte numbers no equals.
const numberTwo = 2;
console.assert(numberTwo === 3, 'Number two isn´t three, then show in terminal :)');

/**
 * Group of Console Count
 */

// [Count] Show "default: 1"
console.count();

// [Count] Show "testA: 1"
console.count('testA');
// [Count] Show "testA: 2"
console.count('testA');

// [Count] Show "testB: 1"
console.count('testB');

// [Count] Reset counter
console.countReset('testA');
// [Count] Show "testA: 1"
console.count('testA');
