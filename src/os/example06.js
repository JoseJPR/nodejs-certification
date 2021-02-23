/**
 * Description: Get and show Platform and Release.
 */

/** Require generics dependences */
import os from 'os';
import 'pretty-console-colors';

// Show Platform.
console.log(os.platform());

// Show Release.
console.log(os.release());
