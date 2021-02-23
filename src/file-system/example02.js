/**
 * Description: Open and close with Url and Buffer.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

// Declare mail function for open and close file by name.
const getFileByUrl = (fileName) => {
  fs.open(`${__dirname}/src/file-system/${fileName}`, 'r', (errOpen, fd) => {
    if (errOpen) throw errOpen;
    fs.close(fd, (errClose) => {
      if (errClose) throw errClose;
    });
  });
};

// Get file with json extension with Url.
getFileByUrl('file.json');

// Declare mail function for open and close file by name.
const getFileByBuffer = (fileName) => {
  fs.open(Buffer.from(`${__dirname}/src/file-system/${fileName}`), 'r', (errOpen, fd) => {
    if (errOpen) throw errOpen;
    fs.close(fd, (errClose) => {
      if (errClose) throw errClose;
    });
  });
};

// Get file with json extension with Buffer.
getFileByBuffer('file.json');
