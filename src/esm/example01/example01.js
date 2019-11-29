/**
 * Description: Import esm module with .js extension file.
 *
 * If your NodeJS version is previous than v13.2.0, you can run this example
 * in your terminal writing: node --experimental-modules example01.js
 *
 * If your NodeJS version is v13.2.0 or higher, you can run this example
 * in your terminal writing: node example01.js
 */

import { user, article } from './example-module.js';

console.log(user);

console.log(article);
