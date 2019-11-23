/**
 * Description: Work with compare, concat, equals, includes,
 * indexOf, lastIndexOf, keys and slice functions.
 */

/** Import generics dependences */
import 'pretty-console-colors';

/**
 * 0 if they are equal
 * 1 if buf1 is higher than buf2
 * -1 if buf1 is lower than buf2
 */

/** Define main const */
const str = 'Hi from NodeJS';
const str1 = 'Hi from NodeJS A';
const str2 = 'Hi from NodeJS B';
const str3 = 'Hi from NodeJS 1';

// [comparte] function with two Buffers.
const c1 = Buffer.from(str);
const c2 = Buffer.from(str);
console.log(`Comparte c1 with c2: ${Buffer.compare(c1, c2)}`);
console.log(`Comparte c2 with c1: ${Buffer.compare(c2, c1)}`);

// [comparte] function with two Buffers.
const c5 = Buffer.from(str3);
const c3 = Buffer.from(str1);
const c4 = Buffer.from(str2);
console.log(`Comparte c3 with c4: ${Buffer.compare(c3, c4)}`);
console.log(`Comparte c4 with c3: ${Buffer.compare(c4, c3)}`);
console.log(`Comparte c5 with c3: ${Buffer.compare(c5, c3)}`);

// [comparte] Other form for compare Buffers.
console.log(`Comparte c1 with c2: ${c1.compare(c2)}`);
console.log(`Comparte c3 with c4: ${c3.compare(c4)}`);

// [concat] Concat buffers.
const c6 = Buffer.from(str);
const c7 = Buffer.from(str);
console.log(`Concat equal buffers: ${Buffer.concat([c6, c7])}`);

// [equals] Are equal buffers?.
const e1 = Buffer.from(str);
const e2 = Buffer.from(str);
const e3 = Buffer.from(str1);
console.log(`Equal buffers e1 and e2: ${e1.equals(e2)}`);
console.log(`Equal buffers e2 and e3: ${e2.equals(e3)}`);

// [includes] Includes a buffer other?.
const i1 = Buffer.from(str);
const i2 = Buffer.from(str1);
console.log(`Includes i1 buffer i2?: ${i1.includes(i2)}`);
console.log(`Includes i2 buffer i1?: ${i2.includes(i1)}`);

// [indexOf] indexOf of string into Buffer.
const i3 = Buffer.from(str);
console.log(`indexOf of 'N' string into Buffer: ${i3.indexOf('N')}`);
console.log(`Includes of 'o' string into Buffer: ${i3.indexOf('o')}`);

// [lastIndeOf] lastIndeOf of string into Buffer.
const i4 = Buffer.from(str);
console.log(`indexOf of 'N' string into Buffer: ${i4.lastIndexOf('N')}`);
console.log(`Includes of 'o' string into Buffer: ${i4.lastIndexOf('o')}`);

// [keys] Get keys of Buffer.
const k1 = Buffer.from(str);
console.log(`Keys of k1 Buffer: ${k1.keys()}`);
for (const key of k1.keys()) {
  console.log(`key: ${key}`);
}
