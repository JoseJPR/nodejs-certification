/* eslint-disable import/no-extraneous-dependencies */

/**
 * Description: Module Exports and Require consts with strings values and require js file.
 */

/** Require generics dependences */
require('pretty-console-colors');

// Require module
const exampleModule = require('./example-module.js');

console.log(exampleModule.welcome); // Return Hello from NodeJS
console.log(exampleModule.bye); // Return Bye Bye!
