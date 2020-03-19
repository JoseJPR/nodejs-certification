/**
 * Description: Use beforeExit event for get when event loop has no additional work to schedule.
 */

/** Require generics dependences */
import http from 'http';
import 'pretty-console-colors';

process.on('message', (data) => {
  console.log('Message received on sub-process-http: ', data);
});

/** Define configuration */
const CONFIG = {
  hostname: '127.0.0.1',
  port: 5000,
};

/** Create http server and return status 200 with text plain */
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello, World from HTTP Server on PORT: ${CONFIG.port}!\n`);
});

/** Set port and hostname */
server.listen(CONFIG.port, CONFIG.hostname, () => {
  console.log(`Server running at http://${CONFIG.hostname}:${CONFIG.port}/`);
});
