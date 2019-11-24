/**
 * Description: Create Clusters by CPUs.
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

if (cluster.isMaster) {
  // Show cpus number.
  console.info(`CPUs number: ${cpus.length}`);

  // Get de main cluster and show Master.
  console.log(`Master ${process.pid} is running`);

  // Iterate on cpus array and active cluster type fork for each cpu.
  cpus.forEach(() => {
    cluster.fork();
  });

  // Active listener "listening" for get when cluster is actived.
  cluster.on('listening', (worker, address) => {
    console.log(`Worker ${worker.process.pid} Listening with PORT ${address.port}`);
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(PORT);
  console.info(`Worker ${process.pid} Start HTTP Server PORT ${PORT}`);
}
