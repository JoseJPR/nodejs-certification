/**
 * Description: Get length of string and buffer string.
 */

/** Import generics dependences */
import 'pretty-console-colors';

// Get length string const and lenght byte of Buffer and compare.
const str = 'Hi from NodeJS';
const str1 = Buffer.from(str);
const str2 = Buffer.byteLength(str);
console.log(`str: ${str}, str length: ${str.length}, str1 lenght: ${str1.length}, str2 byteLength: ${str2}`);
