/* eslint-disable import/first */
/* eslint-disable import/no-extraneous-dependencies */

/**
 * Description: Require JS Module and JSON File.
 */

/** Require generics dependences */
require('pretty-console-colors');

// Require module Employee
const Employee = require('./example-module-a');
const Other = require('./example-module-b');

// If we have .js and .json files, NodeJS require .js file as primary option.
console.log(Employee); // Return [Function: Employee]

// If we have .js and .json files, NodeJS require .js file as primary option.
console.log(Other); // Return { key: 'value' }
