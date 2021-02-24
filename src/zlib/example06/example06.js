/**
 * Description: Create http server and Static files into a public folder.
 */

/** Import generics dependences */
import zlib from 'zlib';
import { pipeline } from 'stream';
import { createReadStream } from 'fs';
import http from 'http';
import path from 'path';

const __dirname = path.resolve();

// Callback error.
const onError = (err) => {
  if (err) console.error(err);
};

// Create http Server.
http.createServer((request, response) => {
  // Define source and destination file.
  const source = createReadStream(`${__dirname}/src/zlib/example06/public${request.url}`);
  // Set header encoding type.
  response.writeHead(200, { 'Content-Encoding': 'br' });
  // Create pipe for get html file, compress and return into responde stream.
  pipeline(source, zlib.createBrotliCompress(), response, onError);
}).listen(3000);
