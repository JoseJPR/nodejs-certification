/**
 * Description: Create http2 server and response html elements.
 * You need write in your browser: https://localhost:8443/
 */

/** Import generics dependences */
import http2 from 'http2';
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

const server = http2.createSecureServer({
  key: fs.readFileSync(`${__dirname}/src/http2/localhost-privkey.pem`),
  cert: fs.readFileSync(`${__dirname}/src/http2/localhost-cert.pem`),
});
server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
  // stream is a Duplex
  stream.respond({
    'content-type': 'text/html',
    ':status': 200,
  });
  stream.end('<h1>Hello World</h1>');
});

server.listen(8443);
