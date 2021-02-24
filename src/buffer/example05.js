/**
 * Description: Work with toString and toJSON functions.
 */

/** Import generics dependences */
import 'pretty-console-colors';

/** Define main const */
const str = 'Hi from NodeJS';

// Convert Buffer to String.
const c1 = Buffer.from(str);
console.log(`Buffer c1 toString: ${c1.toString()}`);

// Convert Buffer to JSON.
const json = c1.toJSON();
console.log(`Buffer c1 toJSON: ${json}`);
for (const key in json) {
  console.log(`key: ${key}, value: ${json[key]}`);
}
