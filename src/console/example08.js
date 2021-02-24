/**
 * Description: Table with arrays of numbers, objects and more arrays of strings.
 */

// Define arrays tables.
const tableA = [1, 2, 3];
const tableB = [
  {
    title: 'Title Article A',
    description: 'Description Article A',
  },
  {
    title: 'Title Article B',
    description: 'Description Article B',
  },
  {
    title: 'Title Article C',
    description: 'Description Article C',
  },
];
const tableC = [
  {
    title: 'Title Article A',
    description: 'Description Article A',
    options: ['option A', 'option B'],
    createdAt: Date.now(),
    deleted: true,
  },
  {
    title: 'Title Article B',
    description: 'Description Article B',
    options: ['option A'],
    createdAt: Date.now(),
  },
  {
    title: 'Title Article C',
    description: 'Description Article C',
    options: ['option B', 'option C'],
    createdAt: Date.now(),
  },
];

// Example table with array of numbers.
console.log('[Example 1]\n---------');
console.table(tableA);
console.log();

// Example table with array of objects with strings.
console.log('[Example 2]\n---------');
console.table(tableB);
console.log();

// Example table with array of objects with strings and arrays of strings.
console.log('[Example 3]\n---------');
console.table(tableC);
console.log();
