/**
 * Description: Create http server and Read Stream for return html file with gzip encoding.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import { createGzip } from 'zlib';
import http from 'http';

const __dirname = path.resolve();

// Create server instance.
const server = http.createServer();

// Set listen function and set config.
server.listen(3000);

// Server Event when received and request http.
server.on('request', (request, response) => {
  console.log('👉 Server   | Request ⤵️');

  if (request.method === 'GET') {

    // Set header encoding.
    response.writeHead(200, { 'Content-Encoding': 'gzip' });

    // Define origin and destination Streams
    fs.createReadStream(`${__dirname}/src/stream/example08/index.html`)
      .pipe(createGzip())
      .pipe(response);
  }
  request.on('end', () => {
    console.log('👀 Request  | End ⤵️');
  });

  request.on('error', (err) => {
    request.end(err);
  });
});
