/**
 * Description: Create first Async Hook and change json props.
 */

/** Import generics dependences */
import https from 'https';
import http from 'http';
import fs from 'fs';
import async_hooks from 'async_hooks';
import 'pretty-console-colors';

/** Define configuration */
const CONFIG = {
  hostname: '127.0.0.1',
  port: 3000,
  fileLog: './src/async-hooks/test.log',
  urlRequest: 'https://jsonplaceholder.typicode.com/todos/1',
};

/** Define http request */
const httpsRequest = async (endpoint) => new Promise((resolve, reject) => {
  https.get(endpoint, (res) => {
    let data = '';
    res.on('data', (d) => {
      data += d;
    });
    res.on('end', () => {
      resolve(data);
    });
  }).on('error', (e) => {
    reject(e);
  });
});

/** Define files tools */
const File = {
  clearContentFile: () => {
    fs.writeFileSync(CONFIG.fileLog, '');
  },
  appendContentFile: (content) => {
    fs.appendFileSync(CONFIG.fileLog, content);
  }
}

/** Create a new async hook */
const asyncHook = async_hooks.createHook({
  init: (asyncId, type, triggerAsyncId, resource) => {
    const eid = async_hooks.executionAsyncId();
    File.appendContentFile(`[INIT] timestamp: ${Date.now()} > ${type}(${asyncId}): / trigger: ${triggerAsyncId} / execution: ${eid} / resource: ${resource}\n`);
  },
  before: () => {
    // ANY
  },
  after: () => {
    // ANY
  },
  destroy: (asyncId) => {
    File.appendContentFile(`[DESTROY] timestamp: ${Date.now()} > asyncId: ${asyncId} \n`);
  },
  promiseResolve: () => {
    // ANY
  },
});

(() => {
  // Clear content log file.
  File.clearContentFile();

  // Enable async hook.
  asyncHook.enable();

  // Create http server and return status 200 with json.
  const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    // Call to external endpoint for get content.
    let result;
    try {
      const request = await httpsRequest(CONFIG.urlRequest);
      result = JSON.parse(request);
    } catch (err) {
      result = 'Wrong value';
    }
    res.end(JSON.stringify({
      result,
    }));
    // Disabled async hook.
    asyncHook.disable();
  });

  // Set port and hostname.
  server.listen(CONFIG.port, CONFIG.hostname, () => {
    console.info(`ON Server running at http://${CONFIG.hostname}:${CONFIG.port}/`);
  });
})();
