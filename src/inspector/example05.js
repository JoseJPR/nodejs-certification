/**
 * Description: Create new session for any inspector and write profile.cpuprofile.
 * You need open Chrome and click in "Open dedicated DevTools for Node" link.
 */

/** Import generics dependences */
import inspector from 'inspector';
import fs from 'fs';
import 'pretty-console-colors';

/** Define configuration */
const config = {
  host: '127.0.0.1',
  port: 9229,
};

// Open inspector link with Chrome.
inspector.open(config.port, config.host, true);

// Create session.
const session = new inspector.Session();
session.connect();

const fd = fs.openSync('profile.cpuprofile', 'w');

session.on('HeapProfiler.addHeapSnapshotChunk', (m) => {
  fs.writeSync(fd, m.params.chunk);
});

session.post('HeapProfiler.takeHeapSnapshot', () => {
  // Invoke business logic under measurement here...
  // Send console to Chrome.
  const elements = [
    {
      keyA: 'Value A 0',
      keyB: 'Value B 0',
    },
    {
      keyA: 'Value A 1',
      keyB: 'Value B 1',
    },
    {
      keyA: 'Value A 2',
      keyB: 'Value B 2',
    },
  ];

  inspector.console.table(elements);
});

setTimeout(() => {
  // some time later...
  session.disconnect();
  fs.closeSync(fd);
}, 5000);
