/**
 * Description: Write error and report to generic json file with an example.
 */

try {
  // This directory dont exist.
  process.chdir('/non-existent-path');
} catch (err) {
  process.report.writeReport(err);
}
