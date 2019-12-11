/**
 * Description: Get File Descriptors with stat function from json and txt files.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

// Declare main function for open, stat and close file by name.
const getFileStatByName = (fileName) => {
  fs.open(`${__dirname}/src/file-system/${fileName}`, 'r', (errOpen, fd) => {
    if (errOpen) throw errOpen;
    fs.fstat(fd, (errStat, stat) => {
      if (errStat) throw errStat;
      console.info(`Stat fileName ${fileName}`, stat);
      fs.close(fd, (errClose) => {
        if (errClose) throw errClose;
      });
    });
  });
};

// Get file with json extension.
getFileStatByName('file.json');

// Get file with txt extension.
getFileStatByName('file.txt');
