/**
 * Description: Create Stream from origin file, replace all emails to * characters and save into new Stream file.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import { Transform } from 'stream';

const __dirname = path.resolve();

// Define origin and destination Streams
const originFile = fs.createReadStream(`${__dirname}/src/stream/example17/origin-text.txt`);
const destinationFile = fs.createWriteStream(`${__dirname}/src/stream/example17/destination-text.txt`);

function extractEmails(text) {
  return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

function anonymizationString(string) {
  return '*'.repeat(string.length);
}

// Create new custom Transform Stream.
const myTransform = new Transform({
  transform(chunk, encoding, next) {
    // Origin data from chunk.
    const data = chunk.toString();

    // Reassign for tranform.
    let anonymization = data;

    // Function to search emails into string.
    let find = [];
    find = [...extractEmails(data)];
    // If find any email iterate into array for anonymization.
    find.forEach((item) => {
      anonymization = anonymization.replace(item, anonymizationString(item));
    });

    this.push(anonymization);

    console.table({
      originChunk: data,
      tranformedChunk: anonymization,
    });

    next();
  },
});

// Launch pipes from origin file, with transform and destination file.
originFile
  .pipe(myTransform)
  .pipe(destinationFile);
