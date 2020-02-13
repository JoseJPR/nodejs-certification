/**
 * Description: Send console log, warn, info and error.
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
inspector.console.log('LOG: Hi from NodeJS');
inspector.console.warn('WARN: Hi from NodeJS');
inspector.console.info('INFO: Hi from NodeJS');
inspector.console.error('ERROR: Hi from NodeJS');
