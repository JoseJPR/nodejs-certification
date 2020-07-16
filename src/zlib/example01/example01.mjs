/**
 * Description: Compress to zip destination file from txt file how source.
 */

/** Import generics dependences */
import zlib from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';

const __dirname = path.resolve();

// Define gzip with createGzip method, this create other stream.
const gzip = zlib.createGzip();

// Define source and destination file.
const source = createReadStream(`${__dirname}/src/zlib/example01/origin.txt`);
const destination = createWriteStream(`${__dirname}/src/zlib/example01/destination.txt.zip`);

// Define pipeline with streams and gzip method (other stream).
pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('Ups, an error:', err);
    process.exitCode = 1;
  }
});
