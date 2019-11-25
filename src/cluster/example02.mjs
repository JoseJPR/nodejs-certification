/**
 * Description: Control cluster waiting or working any task.
 */

/** Import generics dependences */
import cluster from 'cluster';
import http from 'http';
import os from 'os';

import 'pretty-console-colors';

// Define server http port.
const PORT = 8000;

// Get CPUs number.
const cpus = os.cpus();

// Show console message with status clusters.
const updateInfo = (clusterId) => {
  // Clear terminal.
  process.stdout.write('\x1Bc');
  for (const id in cluster.workers) {
    let statusCluster = 'WAITING';
    let consoleType = 'log';
    if (cluster.workers[id].process.pid === clusterId) {
      statusCluster = 'WORKING';
      consoleType = 'info';
    }
    console[consoleType](`CLUSTER PID > [${cluster.workers[id].process.pid}] | STATUS > ${statusCluster} | DATE > ${Date.now()}`);
  }
};

if (cluster.isMaster) {
  // Clear terminal.
  process.stdout.write('\x1Bc');
  // Show cpus number.
  console.info(`CPUs number: ${cpus.length} | Cluster Master PID: ${process.pid} is running`);
  // Iterate on cpus array and active cluster type fork for each cpu.
  cpus.forEach(() => {
    cluster.fork();
  });

  // Active listener "listening" for get when cluster is actived.
  cluster.on('listening', (worker, address) => {
    console.log(`CLUSTER PID > [${worker.process.pid}] | STATUS > LISTENING WITH PORT > ${address.port}`);
  });

  for (const id in cluster.workers) {
    cluster.workers[id].on('message', () => {
      updateInfo(cluster.workers[id].process.pid);
    });
  }
} else {
  http.createServer((req, res) => {
    if (req.method === 'GET') {
      res.writeHead(200);
      res.end('GET hello world\n');
      process.send({ cmd: 'Method GET' });
    } else if (req.method === 'POST') {
      res.writeHead(200);
      res.end('POST hello world\n');
      process.send({ cmd: 'Method POST' });
    } else {
      res.writeHead(405);
      res.end('Method Not Allowed');
      process.send({ cmd: 'Method Not Allowed' });
    }
  }).listen(PORT);
  console.info(`Worker ${process.pid} Start HTTP Server PORT ${PORT}`);
}
