/**
 * Description: Send message between procces, one http server and other write into file.
 */

/** Require generics dependences */
import http from 'http';
import cp from 'child_process';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

// Define and run other process.
const processHttp = cp.fork(`${__dirname}/src/process/example02/sub-process-http.mjs`);
const processFile = cp.fork(`${__dirname}/src/process/example02/sub-process-file.mjs`);

/** Define configuration */
const CONFIG = {
  hostname: '127.0.0.1',
  port: 3000,
};

/** Create http server and return status 200 with text plain */
const server = http.createServer((req, res) => {
  // Responde http request.
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello, World from HTTP Server on PORT: ${CONFIG.port}!\n`);

  // Send message to other process.
  const message = { request: 'Success', method: req.method, timestamp: Date.now() };
  processHttp.send(message);
  processFile.send(message);
});

/** Set port and hostname */
server.listen(CONFIG.port, CONFIG.hostname, () => {
  console.log(`Server running at http://${CONFIG.hostname}:${CONFIG.port}/`);
});
