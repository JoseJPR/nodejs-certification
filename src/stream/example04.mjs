/**
 * Description: .
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const writeFile = () => new Promise((resolve, reject) => {
  let data = '';
  for (let i = 0; i <= 1000000; i += 1) {
    data += "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\n";
  }
  fs.writeFile(`${__dirname}/src/stream/stream-big-example04-writeFile.txt`, data, 'utf8', (err) => {
    if (err) reject(err);
    resolve();
  });
});

const file = fs.createWriteStream(`${__dirname}/src/stream/stream-big-example04-createWriteStream.txt`);
const createWriteStream = () => new Promise((resolve, reject) => {
  for (let i = 0; i <= 1000000; i += 1) {
    file.write("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\n");
  }
  file.end('done writing data');
  file.on('finish', () => resolve());
  file.on('error', (err) => reject(err));
});

(async () => {
  try {
    // Show timer for write file with fs.writeFile function.
    console.time('writeFile');
    await writeFile();
    console.timeEnd('writeFile');

    // Show timer for write file with fs.createWriteStream function.
    console.time('createWriteStream');
    await createWriteStream();
    console.timeEnd('createWriteStream');
  } catch (err) {
    console.log(err);
  }
})();
