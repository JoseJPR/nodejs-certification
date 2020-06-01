/**
 * Description: Create origin Stream, Custom transform Stream and destination Stream for replace text from origin to destination file.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import { Transform } from 'stream';

const __dirname = path.resolve();

// Define origin and destination Streams
const originFile = fs.createReadStream(`${__dirname}/src/stream/example06/origin-text.txt`);
const destinationFile = fs.createWriteStream(`${__dirname}/src/stream/example06/destination-text.txt`);

// Create new custom Transform Stream.
const myTransform = new Transform({
  transform(chunk, encoding, next) {
    let data = chunk.toString();
    console.log(`Origin data -> ${data}`);
    data = data.replace('origin', 'destination');
    console.log(`Transform to -> ${data}`);
    this.push(data);
    next();
  },
});

// Launch pipes from origin file, with transform and destination file.
originFile
  .pipe(myTransform)
  .pipe(destinationFile);

// All events examples.
originFile.on('open', () => console.log('Event originFile: open'));
originFile.on('ready', () => console.log('Event originFile: ready'));
originFile.on('finish', () => console.log('Event originFile: finish'));
originFile.on('close', () => console.log('Event originFile: close'));
originFile.on('error', () => console.log('Event originFile: error'));

myTransform.on('end', () => console.log('Event myTransform: end'));
myTransform.on('finish', () => console.log('Event myTransform: finish'));

destinationFile.on('open', () => console.log('Event destinationFile: open'));
destinationFile.on('ready', () => console.log('Event destinationFile: ready'));
destinationFile.on('finish', () => console.log('Event destinationFile: finish'));
destinationFile.on('close', () => console.log('Event destinationFile: close'));
destinationFile.on('error', () => console.log('Event destinationFile: error'));
