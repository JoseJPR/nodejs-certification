/* eslint-disable import/no-extraneous-dependencies */

/**
 * Description: Module Exports and Require function for sum two digits.
 */

/** Require generics dependences */
require('pretty-console-colors');

// Require module
const exampleModule = require('./example-module.js');

console.log(exampleModule.sum(1, 2)); // Return 3
console.log(exampleModule.sum(999, 1)); // Return 1000
