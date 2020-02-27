/**
 * Description: Create Net Server and recibed severals message second by second
 * from two clients and show connections clienst number.
 */

/** Require generics dependences */
import net from 'net';
import 'pretty-console-colors';

// Define main variables.
let server;

// Function to show clients number connected.
const showClientsConnected = () => {
  server.getConnections((err, count) => {
    if (err) throw err;
    console.info(`Connections Number ${count}`);
  });
};

// Create Server Net.
server = net.createServer((socket) => {
  // Connection Listener.
  console.log('Client connected');

  // Show Clients number connected.
  showClientsConnected();

  socket.on('data', (data) => {
    console.log(data.toString());
  });

  socket.on('end', () => {
    console.log('Client disconnected');

    // Show Clients number connected.
    showClientsConnected();
  });
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
