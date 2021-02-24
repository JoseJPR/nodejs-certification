/**
 * Description: Create Readable Object with iterate map and two pipes for work with severals Streams Writables.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import { Writable, Readable } from 'stream';

const __dirname = path.resolve();

// Define Origin Array.
const originArray = ['Hi', 'From', 'Array'];

/**
 * Destination File.
 */
// Create Write Stream to save in destination file.
const destinationFile = fs.createWriteStream(`${__dirname}/src/stream/example12/destination-text.txt`);

// Launch callback when Destination Array finish.
destinationFile.on('finish', () => {
  fs.readFile(`${__dirname}/src/stream/example13/destination-text.txt`, (err, data) => {
    if (err) console.error(err);
    console.log('destinationFile -> ', data.toString());
  });
});
/**
 * -----------------
 */

/**
 * Destination Array.
 */
// Define init array empty.
const destinationArray = [];

// Create Writable Custom Stream to save in new empty array.
const myWritable = new Writable({
  write(chunk, encoding, next) {
    setTimeout(() => {
      console.log('write');
      destinationArray.push(chunk.toString());
      next();
    }, 100);
  },
});

// Launch callback when Destination Array finish.
myWritable.on('finish', () => {
  console.log('destinationArray -> ', destinationArray);
});
/**
 * -----------------
 */

/**
 * Block for define Origin from array with map iterate and all pipes.
 */
// Define Stream from Readable array.
const origin = Readable.from(originArray.map((item) => `${item} `));

// Create two pipes for the seam origin.
origin
  .pipe(destinationFile);
origin
  .pipe(myWritable);

// Event for get all calls when origin received data.
origin.on('data', (chunk) => {
  console.log('data chunk -> ', chunk);
});
// Event when origin finish get all data.
origin.on('end', () => {
  console.log('end');
});
/**
 * -----------------
 */
