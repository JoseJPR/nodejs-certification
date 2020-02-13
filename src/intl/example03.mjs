/**
 * Description: DateTimeFormat for format date with differents languaje and formats.
 */

/** Import generics dependences */
import 'pretty-console-colors';

// Get format with english format.
const dateA = new Date('01/06/20');
const intlA = new Intl.DateTimeFormat('en');
console.log(intlA.format(dateA)); // Return 1/6/2020

// Get format with english format.
const dateB = new Date('01-06-20');
const intlB = new Intl.DateTimeFormat('en');
console.log(intlB.format(dateB)); // Return 1/6/2020

// Get month.
const dateX = new Date('01/06/20');
const intlX = new Intl.DateTimeFormat('en', { month: 'long' });
console.log(intlX.format(dateX)); // Return Jaunary
