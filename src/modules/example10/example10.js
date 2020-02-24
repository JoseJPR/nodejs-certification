/* eslint-disable import/first */
/* eslint-disable import/no-extraneous-dependencies */

/**
 * Description: Require JS Module from folder with Package.json file.
 */

/** Require generics dependences */
require('pretty-console-colors');

// Require module Employee
const Employee = require('./example-module/dist/example-module');

// If we have .js and .json files, NodeJS require .js file as primary option.
console.log(Employee); // Return [Function: Employee]
