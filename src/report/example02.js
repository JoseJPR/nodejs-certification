/**
 * Description: Write error and report to concrete file with an example.
 */

/** Import generics dependences */
import path from 'path';

const __dirname = path.resolve();

try {
  // This directory dont exist.
  process.chdir('/non-existent-path');
} catch (err) {
  process.report.writeReport(`${__dirname}/src/report/report-${Date.now()}.json`, err);
}
