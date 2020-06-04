/**
 * Description: Sequentials Pipes with end option to false and Readable and Duplex with write functions more info with timeouts.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import { Readable, Duplex } from 'stream';

const __dirname = path.resolve();

// Define Origin Array.
const originArray = ['Hi', 'From', 'Array'];

/**
 * Destinations Files.
 */
// Create Writes Streams to save in destination files.
const descriptionFile = fs.createWriteStream(`${__dirname}/src/stream/example14/destination-text.txt`);

// Launch callback when Destination Array finish.
descriptionFile.on('finish', () => {
  console.log('Event descriptionFile finish');
});
/**
 * -----------------
 */

/**
 * Transform Stream.
 */
// Create new custom Transform Stream.
const myDuplex = new Duplex({
  read(size) {
    console.log(size);
  },

  write(chunk, encoding, next) {
    let data = chunk.toString();
    // console.log(`Origin data -> ${data}`);
    data = data.replace('Hi', 'Bye');
    // console.log(`Transform to -> ${data}`);
    this.push(data);
    next();
  },
});
myDuplex.on('data', (chunk) => {
  console.log('Event myDuplex data', chunk.toString());
});
myDuplex.on('end', () => {
  console.log('Event myDuplex end');
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
origin.pipe(myDuplex, { end: false }).pipe(descriptionFile);
setTimeout(() => {
  myDuplex.write('(500) > More info! ');
}, 500);
setTimeout(() => {
  myDuplex.write('(1000) > More info! ');
}, 1000);
setTimeout(() => {
  myDuplex.write('(1500) > More info! ');
}, 1500);

// Event for get all calls when origin received data.
origin.on('data', (chunk) => {
  console.log('Event Origin data chunk -> ', chunk);
});
// Event when origin finish get all data.
origin.on('end', () => {
  console.log('Event Origin end');
});
/**
 * -----------------
 */
