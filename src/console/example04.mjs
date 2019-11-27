/**
 * Description: Clear console with setTimeout into async function.
 */

const Clear = async (miliseconds) => new Promise((resolve) => {
  setTimeout(() => {
    console.clear();
    resolve();
  }, miliseconds);
});

(async () => {
  // Clear all terminal
  await Clear(0);
  // Show first console message
  console.log('Hi from NodeJS, my first time...');
  // Clear all terminal again, witting 1s
  await Clear(1000);
  // Show new message
  console.log('Hi from NodeJS again :)');
})();
