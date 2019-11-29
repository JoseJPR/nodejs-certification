/**
 * Description: Import esm submodule from "libs" folder into your js
 * application with .js extension file.
 *
 * IMPORTANT: First of all you need run "npm i" into this folder.
 *
 * If your NodeJS version is previous than v13.2.0, you can run this example
 * in your terminal writing: node --experimental-modules example03.js
 *
 * If your NodeJS version is v13.2.0 or higher, you can run this example
 * in your terminal writing: node example03.js
 */

import user from 'example-module/user';
import article from 'example-module/article';

console.log(user);

console.log(article);
