/**
 * Description: Timers with severals externals request https for others REST APIs.
 */

/** Require generics dependences */
import { PerformanceObserver, performance } from 'perf_hooks';
import https from 'https';
import 'pretty-console-colors';

const request = (url, done) => {
  performance.mark(`request ${url} init`);
  https.get(url, () => {
    console.log(`Done for ${url}`);
  });
  performance.mark(`request ${url} end`);
  performance.measure(`request ${url}`, `request ${url} init`, `request ${url} end`);
  done();
};

const obs = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`Function: ${entry.name}`, entry.duration);
  });
});
obs.observe({ entryTypes: ['measure'], buffered: false });

request('https://jsonplaceholder.typicode.com/todos/1', () => {
  console.log('request: /todos/1 Done!');
});

request('https://jsonplaceholder.typicode.com/todos/10', () => {
  console.log('request: /todos/10 Done!');
});

request('https://jsonplaceholder.typicode.com/todos', () => {
  console.log('request /todos Done!');
});
