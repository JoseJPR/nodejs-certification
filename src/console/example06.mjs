/**
 * Description: Group and groupEnd.
 */

// Create group one level
console.log('[Example 1]\n---------');
console.group('Group Name A');
console.log('Line A A');
console.log('Line A B');
console.log('Line A C');
console.groupEnd();
console.log();

// Create two group tow level
console.log('[Example 2]\n---------');
console.group('Group Name B');
console.log('Line B A');

console.group('Group Name C');
console.log('Line C A');
console.log('Line C B');
console.log('Line C C');
console.groupEnd();

console.log('Line B B');
console.log('Line B C');
console.groupEnd();
