/**
 * Description: Create http server and Read Stream for create gz file from txt file and download with browser.
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

  // Create file zip from txt and return to download file.
  fs.createReadStream(`${__dirname}/src/stream/example07/file.txt`)
    .pipe(createGzip())
    .pipe(response);

  request.on('end', () => {
    console.log('👀 Request  | End ⤵️');
  });

  request.on('error', (err) => {
    request.end(err);
  });
});
