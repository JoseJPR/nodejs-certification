/**
 * Description: In callback functions.
 */

/** Import generics dependences */
import { readFile } from 'fs';
import 'pretty-console-colors';

readFile('/any.file', (err, data) => {
  if (err) {
    console.error('[withoutTryCatch]', 'There was an error', err);
    return;
  }
  console.log(data);
});
