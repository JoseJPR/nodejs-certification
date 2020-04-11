/**
 * Description: Launch an error and getReport to show javascriptStack object.
 */

const report = process.report.getReport(new Error('custom error'));
console.log(report.javascriptStack);
