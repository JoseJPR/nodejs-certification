/**
 * Description: The process.execArgv property returns the set of Node.js-specific
 *              command-line options passed when the Node.js process was launched.
 */

/** Require generics dependences */
import 'pretty-console-colors';

// Execute this script for example: node --harmony src/process/example11.mjs
console.log(process.execArgv); // Return array [ '--harmony' ]
console.log(process.argv); // Return array but not show '--harmony'
