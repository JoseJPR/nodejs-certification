/**
 * Description: Http request with Reject results and objects
 * results with structure and typeof control.
 */

/** Import generics dependences */
import https from 'https';
import { strict } from 'assert';
import 'pretty-console-colors';

/** Define http request */
const httpsRequest = async (endpoint) => {
  return new Promise((resolve, reject) => {
    https.get(endpoint, (res) => {
      let data = '';
      res.on('data', (d) => {
        data += d;
      });
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (e) => {
      reject(e);
    });
  });
};

console.group('GROUP \n');

(async () => {
  // These request return reject for wrong url.
  try {
    await strict.rejects(
      async () => {
        const urlRequest = 'https://jsonplaceholder.typcode.com/posts/1';
        try {
          await httpsRequest(urlRequest);
        } catch (err) {
          throw new TypeError('Wrong value');
        }
      }
    );
    console.info('[PASSED] http request with reject!');
  } catch (err) {
    console.error(err);
  }

  // These objects contains equals structure and values.
  try {
    const post = {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    };
    const urlRequest = 'https://jsonplaceholder.typicode.com/posts/1';
    const request = await httpsRequest(urlRequest);
    const result = JSON.parse(request);
    strict.deepEqual(result, post);
    console.info('[PASSED] Objects are equals!');
  } catch (err) {
    console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
  }

  // These objects contains equals structure and values.
  try {
    const urlRequest = 'https://jsonplaceholder.typicode.com/posts/1';
    const request = await httpsRequest(urlRequest);
    const result = JSON.parse(request);
    strict.ok(typeof result.userId === 'number');
    strict.ok(typeof result.id === 'number');
    strict.ok(typeof result.title === 'string');
    strict.ok(typeof result.body === 'string');
    console.info('[PASSED] Types of values are equals!');
  } catch (err) {
    console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
  }

  // These objects NO contains equals structure.
  try {
    const post = {
      userId: 1,
      id: 1,
    };
    const urlRequest = 'https://jsonplaceholder.typicode.com/posts/1';
    const request = await httpsRequest(urlRequest);
    const result = JSON.parse(request);
    strict.deepEqual(result, post);
    console.info('[PASSED] Objects are equals!');
  } catch (err) {
    console.error(`[FAIL] Expected > ${JSON.stringify(err.expected)} | Actual > ${JSON.stringify(err.actual)}`);
  }
})();

console.groupEnd();
