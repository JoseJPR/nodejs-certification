/**
 * Description: Collator functions for get order string and sort string by order.
 */

/** Import generics dependences */
import 'pretty-console-colors';

// Comparte order strings.
console.log(new Intl.Collator('en').compare('a', 'a')); // Return 0
console.log(new Intl.Collator('en').compare('car', 'cat')); // Return -1
console.log(new Intl.Collator('en').compare('house', 'horse')); // Return 1
console.log(new Intl.Collator('en').compare('Hi from NodeJS', 'Hello from NodeJS')); // Return 1

// Sort string by order.
console.log(['a', 'a'].sort(new Intl.Collator('en').compare)); // Return a, a
console.log(['car', 'cat'].sort(new Intl.Collator('en').compare)); // Return car, cat
console.log(['house', 'horse'].sort(new Intl.Collator('en').compare)); // Return horse, house
console.log(['Hi from NodeJS', 'Hello from NodeJS'].sort(new Intl.Collator('en').compare)); // Return Hello from NodeJS, Hi from NodeJS
