/**
 * Description: Time and timeEnd.
 */

// Create group one level
console.log('[Example 1]\n---------');
console.time('Group Name A');
console.log('Line A A');
console.log('Line A B');
console.log('Line A C');
console.timeEnd('Group Name A');
console.log();

// Create two group tow level
console.log('[Example 2]\n---------');
console.time('Group Name B');
console.log('Line B A');

console.time('Group Name C');
console.log('Line C A');
console.log('Line C B');
console.log('Line C C');
console.timeEnd('Group Name C');

console.log('Line B B');
console.log('Line B C');
console.timeEnd('Group Name B');
