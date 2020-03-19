/* eslint-disable no-global-assign */
/**
 * Description: Get duration timer of severals require functions of modules.
 */

/** Require generics dependences */
const { PerformanceObserver, performance } = require('perf_hooks');

// Create timerify wrapper for require function.
require = performance.timerify(require);

// Activate the observer.
const obs = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`require('${entry[0]}')`, entry.duration);
  });
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'], buffered: true });

// Send example require modules for get duration.
require('https');
require('http');
require('http2');
