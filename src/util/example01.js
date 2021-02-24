/**
 * Description: Use .callbackify method with async function.
 */

/** Import generics dependences */
import util from 'util';

async function fn() {
  return 'Hi from Async';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});
