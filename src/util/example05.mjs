/**
 * Description: Return console with color in terminal and params.
 */

/** Import generics dependences */
import util from 'util';

const result = util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 });
console.log(result);
