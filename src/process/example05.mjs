/**
 * Description: Use unhandledRejection event for get all promise without catch.
 */

/** Require generics dependences */
import 'pretty-console-colors';

process.on('unhandledRejection', (reason, promise) => {
  console.warn('unhandledRejection', reason, promise);
});

const oneRejectPromise = new Promise((resolve, reject) => {
  reject(new Error('UPS! oneRejectPromise'));
});

// Bad: Error promise whitout catch, unhandledRejection event will be launched.
oneRejectPromise
  .then((result) => {
    console.log(result);
  });

// Good: If you define catch function with callback unhandledRejection event not will be launched.
// oneRejectPromise
//   .then((result) => {
//     console.log(result);
//   }).catch((err) => {
//     console.error(err);
//   });
