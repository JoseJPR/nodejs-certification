/**
 * Description: Get and show Free and Total System Memmory.
 */

/** Require generics dependences */
import os from 'os';
import 'pretty-console-colors';

// Show free memory.
console.log(`Free Memory -> ${os.freemem()}`);

// Show total memory.
console.log(`Total Memory -> ${os.totalmem()}`);
