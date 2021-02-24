/**
 * Description: Create .gz file from jpg file and uncompress with createGunzip method.
 *              For run this example you need create a .gz file from .jpg, execute "gzip photo.jpg".
 */

/** Import generics dependences */
import zlib from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';

const __dirname = path.resolve();

// Define gzip with createGzip method, this create other stream.
const gunzip = zlib.createGunzip();

// Define source and destination file for uncompress secuence.
const source = createReadStream(`${__dirname}/src/zlib/example04/photo.jpg.gz`);
const destination = createWriteStream(`${__dirname}/src/zlib/example04/photo.jpg`);

// Define pipeline with streams and gzip method (other stream).
pipeline(source, gunzip, destination, (err) => {
  if (err) {
    console.error('Ups, an error:', err);
    process.exitCode = 1;
  }
});
