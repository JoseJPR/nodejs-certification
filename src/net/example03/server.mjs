/**
 * Description: Create Net Server and recibed severals message second by second.
 */

/** Require generics dependences */
import net from 'net';
import 'pretty-console-colors';

const server = net.createServer((socket) => {
  // 'connection' listener.
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log(data.toString());
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
  socket.pipe(socket);
});

server.on('error', (err) => {
  console.error(err);
});

setInterval(() => {
  server.getConnections((err, count) => {
    console.info(`Connections Number ${count}`);
  });
}, 1000);

server.listen({
  host: '127.0.0.1',
  port: 8124,
}, () => {
  const info = server.address();
  console.log(`Server Net actived on: ${info.address} and port: ${info.port}`);
});
