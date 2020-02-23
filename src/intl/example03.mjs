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

// Get format with english format.
const dateC = new Date('01-06-20');
const intlCA = new Intl.DateTimeFormat('en', { dateStyle: 'full' });
const intlCB = new Intl.DateTimeFormat('en', { dateStyle: 'long' });
const intlCC = new Intl.DateTimeFormat('en', { dateStyle: 'medium' });
const intlCD = new Intl.DateTimeFormat('en', { dateStyle: 'short' });
console.log(intlCA.format(dateC)); // Return Monday, January 6, 2020
console.log(intlCB.format(dateC)); // Return January 6, 2020
console.log(intlCC.format(dateC)); // Return Jan 6, 2020
console.log(intlCD.format(dateC)); // Return 1/6/20

// Get format with english format.
const dateD = new Date('01-06-20 08:12:59');
const intlDA = new Intl.DateTimeFormat('en', { timeStyle: 'full' });
const intlDB = new Intl.DateTimeFormat('en', { timeStyle: 'long' });
const intlDC = new Intl.DateTimeFormat('en', { timeStyle: 'medium' });
const intlDD = new Intl.DateTimeFormat('en', { timeStyle: 'short' });
console.log(intlDA.format(dateD)); // Return 8:12:59 AM Central European Standard Time
console.log(intlDB.format(dateD)); // Return 8:12:59 AM GMT+1
console.log(intlDC.format(dateD)); // Return 8:12:59 AM
console.log(intlDD.format(dateD)); // Return 8:12 AM
