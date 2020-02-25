/**
 * Description: Client B Net Connection with Server with emit severals message second by second Without Close Socket.
 */

/** Require generics dependences */
import net from 'net';
import 'pretty-console-colors';

const client = net.createConnection({
  host: '127.0.0.1',
  port: 8124,
}, () => {
  console.log('Connected with server!');
  client.write('Hi from Net Client B');
});

client.on('connect', () => {
  console.log('Client connected');
});

client.on('ready', () => {
  console.log('Client ready');
});

client.on('data', (data) => {
  console.log(data.toString());
});

client.on('end', () => {
  console.log('Disconnected from server');
});

setInterval(() => {
  client.write(`Hi from Net Client B Again ${Date.now()}`);
}, 1000);
