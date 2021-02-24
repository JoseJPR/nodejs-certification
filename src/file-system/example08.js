/**
 * Description: Get if directory is or not directory and file is or not file.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

const getContent = (pathName) => {
  const content = fs.readdirSync(`${__dirname}/src/file-system/${pathName}`);
  Object.entries(content).forEach(([key, fileName]) => {
    console.log(key, fileName);
    console.log('[getContent] isFile', fs.statSync(`${__dirname}/src/file-system/${pathName}/${fileName}`).isFile());
    console.log('[getContent] isDirectory', fs.statSync(`${__dirname}/src/file-system/${pathName}/${fileName}`).isDirectory());
  });
};

getContent('test-with-folder');
