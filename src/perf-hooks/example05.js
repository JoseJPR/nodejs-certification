/**
 * Description: Show Measure and Mark timers with two Observers.
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

const obsMeasure = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`Function: ${entry.name}`, entry.duration);
  });
});
obsMeasure.observe({ entryTypes: ['measure'], buffered: false });

const obsMark = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`Function: ${entry.name}`, entry.startTime);
  });
});
obsMark.observe({ entryTypes: ['mark'], buffered: false });

request('https://jsonplaceholder.typicode.com/todos', () => {
  console.log('request: /todos/1 Done!');
});
