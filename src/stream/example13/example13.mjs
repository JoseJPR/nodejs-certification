/**
 * Description: Parallel Pipes with Readable from array with iterate map, transform and Write with two Stream file.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import { Readable, Transform } from 'stream';

const __dirname = path.resolve();

// Define Origin Array.
const originArray = ['Hi', 'From', 'Array'];

/**
 * Destinations Files.
 */
// Create Writes Streams to save in destination files.
const descriptionFileA = fs.createWriteStream(`${__dirname}/src/stream/example13/destination-text-a.txt`);
const descriptionFileB = fs.createWriteStream(`${__dirname}/src/stream/example13/destination-text-b.txt`);

// Launch callback when Destination Array finish.
descriptionFileA.on('finish', () => {
  console.log('Event descriptionFileA finish');
});
descriptionFileB.on('finish', () => {
  console.log('Event descriptionFileB finish');
});
/**
 * -----------------
 */

/**
 * Transform Stream.
 */
// Create new custom Transform Stream.
const myTransform = new Transform({
  transform(chunk, encoding, next) {
    let data = chunk.toString();
    console.log(`Origin data -> ${data}`);
    data = data.replace('Hi', 'Bye');
    console.log(`Transform to -> ${data}`);
    this.push(data);
    next();
  },
});
/**
 * -----------------
 */

/**
 * Block for define Origin from array with map iterate and all pipes.
 */
// Define Stream from Readable array.
const origin = Readable.from(originArray.map((item) => `${item} `));

// Define new Stream transformed for launch differents pipes.
const transformedOrigin = origin.pipe(myTransform);
transformedOrigin.pipe(descriptionFileA);
transformedOrigin.pipe(descriptionFileB);

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
