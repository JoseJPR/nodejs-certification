/**
 * Description: Create http2 server and with html file and push css and js file.
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

  stream.pushStream({ ':path': '/statics/app.js' }, (err, pushStream, headers) => {
    if (err) throw err;
    pushStream.respond({
      'content-type': 'application/x-javascript',
      ':status': 200,
    });
    const result = fs.readFileSync(`${__dirname}/src/http2/example04/statics/app.js`);
    pushStream.end(result);
  });

  stream.pushStream({ ':path': '/statics/style.css' }, (err, pushStream, headers) => {
    setTimeout(() => {
      if (err) throw err;
      pushStream.respond({
        'content-type': 'text/css',
        ':status': 200,
      });
      const result = fs.readFileSync(`${__dirname}/src/http2/example04/statics/style.css`);
      pushStream.end(result);
    }, 1000);
  });

  const result = fs.readFileSync(`${__dirname}/src/http2/example04/index.html`);
  stream.end(result);
});

server.listen(8443);
