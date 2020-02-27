/**
 * Description: Create Net Server, recibed a message and emit other.
 */

/** Require generics dependences */
import net from 'net';
import 'pretty-console-colors';

// Create Server Net.
const server = net.createServer((socket) => {
  // Connection Listener.
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log(data.toString());
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });

  // Write and send message to client.
  socket.write('Hi from Net Server');
  socket.pipe(socket);
});

server.on('error', (err) => {
  console.error(err);
});

// Define host and port of server.
server.listen({
  host: '127.0.0.1',
  port: 8124,
}, () => {
  // Get and show info of server.
  const info = server.address();
  console.log(`Server Net actived on: ${info.address} and port: ${info.port}`);
});
