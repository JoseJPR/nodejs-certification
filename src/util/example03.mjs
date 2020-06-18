/**
 * Description: Return with .debuglog method param.
 * Execute: NODE_DEBUG=foo node src/util/example03.mjs
 */

/** Import generics dependences */
import util from 'util';

const debuglog = util.debuglog('foo');
debuglog('hello from foo [%d]', 123);
