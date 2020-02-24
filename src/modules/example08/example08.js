/* eslint-disable import/first */
/* eslint-disable import/no-extraneous-dependencies */

/**
 * Description: Two Require of the same Module assign with Require Cache just once.
 */

/** Require generics dependences */
require('pretty-console-colors');

// Require module Employee
require('./example-module.js');
require('./example-module.js');

// You can see only one example-module.js definition into require.cache object.
console.log(require.cache);
