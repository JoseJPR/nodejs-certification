/**
 * Description: Timer and measure for JSON parse and stringify functions examples.
 */

/** Require generics dependences */
import { PerformanceObserver, performance } from 'perf_hooks';
import 'pretty-console-colors';

// Function example.
const getJSONParse = (data) => {
  performance.mark('getJSONParse init');
  JSON.parse(data);
  performance.mark('getJSONParse end');
  performance.measure('getJSONParse', 'getJSONParse init', 'getJSONParse end');
};

// Function example.
const getJSONStringify = (data) => {
  performance.mark('getJSONStringify init');
  JSON.stringify(data);
  performance.mark('getJSONStringify end');
  performance.measure('getJSONStringify', 'getJSONStringify init', 'getJSONStringify end');
};

// Define Observer for show name and duration timer.
const obs = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`Function: ${entry.name}`, entry.duration);
  });
});
obs.observe({ entryTypes: ['measure'], buffered: false });

// Call to functions.
getJSONParse('{"keyA": 1, "keyB": "text"}');
getJSONStringify({ keyA: 1, keyB: 'text' });
