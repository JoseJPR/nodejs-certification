/** Import generics dependences */
import { parentPort } from 'worker_threads';
import fs from 'fs';

// Define random time for set to setTimeout.
console.log('Worker Started');

// Function for read the content of files.
const readFile = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
});

// Function for write the content into a file.
const writeFile = (path, data) => new Promise((resolve, reject) => {
  fs.writeFile(path, data, (err) => {
    if (err) reject(err);
    resolve('Saved');
  });
});

parentPort.on('message', async (data) => {
  try {
    const contentFile = await readFile(data.origin);
    const parsed = JSON.parse(contentFile).map((row) => ({ ...row, ...{ updatedAt: Date.now() } }));
    await writeFile(data.destination, JSON.stringify(parsed));
    parentPort.postMessage('Finished');
  } catch (err) {
    parentPort.postMessage(err.message);
  }
});
