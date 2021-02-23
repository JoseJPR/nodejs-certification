/**
 * Description: Client Net Connection with Server with emit function message Closing Socket.
 */

/** Require generics dependences */
import net from 'net';
import 'pretty-console-colors';

// Create Client Connection Net.
const client = net.createConnection({
  host: '127.0.0.1',
  port: 8124,
}, () => {
  // Connection Listener.
  console.log('Connected with server!');

  // Write and send message to server.
  client.write('Hi from Net Client');
});

client.on('connect', () => {
  console.log('Client connected');
});

client.on('ready', () => {
  console.log('Client ready');
});

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('Disconnected from server');
});
