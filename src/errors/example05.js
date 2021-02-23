/**
 * Description: Custom message Error into throw.
 */

/** Import generics dependences */
import 'pretty-console-colors';

const namePeopleA = 'jose';
const namePeopleB = 'jhon';

try {
  if (namePeopleA === namePeopleB) {
    console.log('The names are equals.');
  } else {
    throw new Error('The names aren´t equals');
  }
} catch (e) {
  console.error(e);
}
