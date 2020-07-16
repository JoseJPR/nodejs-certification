/**
 * Description: Compress jpg file to zip file and decompress zip for get jpg origin file.
 */

/** Import generics dependences */
import zlib from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';

const __dirname = path.resolve();

// Define gzip and gunzip for generate compress and decompress file form jpg origin file.
const gunzip = zlib.createGunzip();
const gzip = zlib.createGzip();

// Define source and destination file for compress secuence.
const sourceA = createReadStream(`${__dirname}/src/zlib/example02/photo.jpg`);
const destinationA = createWriteStream(`${__dirname}/src/zlib/example02/photo.jpg.zip`);

// Define pipeline with streams and gzip method (other stream).
pipeline(sourceA, gzip, destinationA, (errA) => {
  if (errA) {
    console.error('Ups, an error:', errA);
    process.exitCode = 1;
  }
  // Define source and destination file for uncompress secuence.
  const sourceB = createReadStream(`${__dirname}/src/zlib/example02/photo.jpg.zip`);
  const destinationB = createWriteStream(`${__dirname}/src/zlib/example02/photo-new.jpg`);
  // Define pipeline with streams and gzip method (other stream).
  pipeline(sourceB, gunzip, destinationB, (errB) => {
    if (errB) {
      console.error('Ups, an error:', errB);
      process.exitCode = 1;
    }
  });
});
