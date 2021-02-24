/**
 * Description: Create a basic http server and return json example.
 */

/** Import generics dependences */
import http from 'http';
import 'pretty-console-colors';

/** Define configuration */
const CONFIG = {
  hostname: '127.0.0.1',
  port: 3000,
};

/** Create http server and return status 200 with json */
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    result: 'Hello, World!',
  }));
});

/** Set port and hostname */
server.listen(CONFIG.port, CONFIG.hostname, () => {
  console.log(`Server running at http://${CONFIG.hostname}:${CONFIG.port}/`);
});
