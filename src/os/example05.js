/**
 * Description: Get and show Network Interfaces and props.
 */

/** Require generics dependences */
import os from 'os';
import 'pretty-console-colors';

// Show host network interfaces.
console.log(os.networkInterfaces());
