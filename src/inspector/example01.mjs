/**
 * Description: Create inspector instance and config host and port.
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

// Send console to Chrome.
inspector.console.log('Hi from NodeJS');
