/**
 * Description: Is Buffer and is Encoding functions.
 */

/** Import generics dependences */
import 'pretty-console-colors';

// Get if one const is or not a Buffer.
const str = 'Hi from NodeJS';
const str1 = Buffer.from(str);
console.log(`str isBuffer: ${Buffer.isBuffer(str)} str1 isBuffer: ${Buffer.isBuffer(str1)}`);

// Controler if one encoding is correct for Buffer or not.
const encoding1 = 'utf8';
const encoding2 = 'base64';
const encoding3 = 'other';
console.log(`encoding1 isEncoding: ${Buffer.isEncoding(encoding1)}, encoding2 isEncoding: ${Buffer.isEncoding(encoding2)}, encoding3 isEncoding: ${Buffer.isEncoding(encoding3)}`);
