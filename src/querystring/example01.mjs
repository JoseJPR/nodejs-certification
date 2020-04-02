/**
 * Description: Use querystring.encode for encode json object to url params.
 */

/** Require generics dependences */
import 'pretty-console-colors';
import querystring from 'querystring';

const jsonExample = {
  title: 'This is the title of the Article',
  resume: 'Nibh tortor id aliquet lectus proin. Hac habitasse platea dictumst vestibulum rhoncus. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Senectus et netus et malesuada fames ac. Congue eu consequat ac felis donec et odio.',
  url: 'https://nodejs.org/api/querystring.html',
};

console.log(querystring.encode(jsonExample));
