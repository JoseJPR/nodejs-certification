/**
 * Description: Write big file with .write method with this result: 1,1G stream-big-example03.txt.
 */

/** Import generics dependences */
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const file = fs.createWriteStream(`${__dirname}/src/stream/stream-big-example03.txt`);
for (let i = 0; i <= 1e6; i += 1) {
  file.write("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");
  file.write("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");
}
file.end('done writing data');

file.on('open', () => {
  console.log('Event: open');
});

file.on('ready', () => {
  console.log('Event: ready');
});

file.on('finish', () => {
  console.log('Event: finish');
});

file.on('close', () => {
  console.log('Event: close');
});

/** Others */

file.on('error', () => {
  console.log('Event: error');
});
