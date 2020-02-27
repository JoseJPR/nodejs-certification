/**
 * Description: Create Net Server and two clients and send Message to differents client Pear to Pear.
 */

/** Require generics dependences */
import net from 'net';
import 'pretty-console-colors';

// Define main variables.
let server;
const clients = [];

// Function to show clients number connected.
const showClientsConnected = () => {
  server.getConnections((err, count) => {
    if (err) throw err;
    console.info(`Connections Number: ${count} and Clients registerd in array: ${clients.length}`);
  });
};

// Function to register client into array clients for set an id.
const registerClient = (id, socket) => {
  const _socket = socket;
  _socket.id = id;
  // Add into clients array a new client reference.
  clients.push(_socket);

  // Send message to client with custom id.
  _socket.write(`Hi client, your Id is: ${id}`);

  _socket.on('data', (data) => {
    console.log(data.toString());
  });

  _socket.on('end', () => {
    console.warn(`Client disconnected with id: ${_socket.id}`);
    // Get index position of client into array by id.
    const index = clients.findIndex((e) => e.id === _socket.id);
    // Remove client from array by index.
    clients.splice(index, 1);

    // Show Clients number connected.
    showClientsConnected();
  });
  _socket.pipe(_socket);
};

// Create Server Net.
server = net.createServer((socket) => {
  // Connection Listener.
  console.warn('Client connected');

  // Show Clients number connected.
  showClientsConnected();

  // Register client into array for send message to a client.
  registerClient(Date.now(), socket);
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

// Interval to get clients from array to send random a message pear to pear client.
setInterval(() => {
  // Send messages to clients if has as minimum of two registered.
  if (clients.length > 1) {
    // Get random client from array.
    const client = clients[Math.round(Math.random())];
    // Write message to client.
    client.write(`Hi Client: ${client.id}, this is a timestamp: ${Date.now()}`);
  }
}, 2000);
