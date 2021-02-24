/**
 * Description: Return with .debuglog method severals params.
 * Execute: NODE_DEBUG=foo-* node src/util/example04.mjs
 */

/** Import generics dependences */
import util from 'util';

const debuglogA = util.debuglog('foo-a');
debuglogA('hello from foo-a [%d]', 123);

const debuglogB = util.debuglog('foo-b');
debuglogB('hello from foo-b [%d]', 456);
