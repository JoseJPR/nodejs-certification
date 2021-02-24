/**
 * Description: Create first safe and not Buffer empty and with string.
 */

/** Import generics dependences */
import 'pretty-console-colors';

// Creates a zero-filled Buffer of length 10.
const a1 = Buffer.alloc(10);
console.log('a1', a1);
console.log('a1 String', a1.toString());

// Creates a Buffer of length 10, filled with 41 = A.
const a2 = Buffer.alloc(10, 'A');
console.log('a2', a2);
console.log('a2 String', a2.toString());

// Create a Buffer no safe and transform to string.
const a3 = Buffer.allocUnsafe(10);
console.log('a3', a3);
console.log('a3 String', a3.toString());

// Create a Buffer from a string and transform to string.
const f1 = Buffer.from('Hi from NodeJS');
console.log('f1', f1);
console.log('f1 String', f1.toString());
