/**
 * Description: Create new session for any inspector and report via console.
 * You need open Chrome and click in "Open dedicated DevTools for Node" link.
 */

/** Import generics dependences */
import inspector from 'inspector';
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

session.post('Profiler.enable', () => {
  session.post('Profiler.start', () => {
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
});

setTimeout(() => {
  // some time later...
  session.post('Profiler.stop', (err, { profile }) => {
    // Write profile to disk, upload, etc.
    if (!err) {
      inspector.console.log(profile);
    }
  });
}, 1000);
