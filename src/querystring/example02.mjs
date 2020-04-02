/**
 * Description: Use querystring.decode for decode url with several params to json object.
 */

/** Require generics dependences */
import 'pretty-console-colors';
import querystring from 'querystring';

const urlExample = 'title=This%20is%20the%20title%20of%20the%20Article&resume=Nibh%20tortor%20id%20aliquet%20lectus%20proin.%20Hac%20habitasse%20platea%20dictumst%20vestibulum%20rhoncus.%20Praesent%20elementum%20facilisis%20leo%20vel%20fringilla%20est%20ullamcorper%20eget.%20Senectus%20et%20netus%20et%20malesuada%20fames%20ac.%20Congue%20eu%20consequat%20ac%20felis%20donec%20et%20odio.&url=https%3A%2F%2Fnodejs.org%2Fapi%2Fquerystring.html';

console.log(querystring.decode(urlExample));
