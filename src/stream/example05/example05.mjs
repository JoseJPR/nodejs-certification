/**
 * Description: Create origin and destination Stream and use gzip for compress file destination.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import { createGzip } from 'zlib';

const __dirname = path.resolve();

// Define origin and destination Streams
const originFile = fs.createReadStream(`${__dirname}/src/stream/example05/origin-text.txt`);
const destinationFile = fs.createWriteStream(`${__dirname}/src/stream/example05/destination-text.txt.gz`);

// Launch pipes from origin file, with transform and destination file.
originFile
  .pipe(createGzip())
  .pipe(destinationFile);

// All events examples.
originFile.on('open', () => console.log('Event originFile: open'));
originFile.on('ready', () => console.log('Event originFile: ready'));
originFile.on('finish', () => console.log('Event originFile: finish'));
originFile.on('close', () => console.log('Event originFile: close'));
originFile.on('error', () => console.log('Event originFile: error'));

destinationFile.on('open', () => console.log('Event destinationFile: open'));
destinationFile.on('ready', () => console.log('Event destinationFile: ready'));
destinationFile.on('finish', () => console.log('Event destinationFile: finish'));
destinationFile.on('close', () => console.log('Event destinationFile: close'));
destinationFile.on('error', () => console.log('Event destinationFile: error'));
