/**
 * Description: Use multipleResolves event for tracking potential
 * errors in an application while using the Promise constructor.
 */

/** Require generics dependences */
import 'pretty-console-colors';

process.on('multipleResolves', (type, promise, reason) => {
  console.error(type, promise, reason);
  setImmediate(() => process.exit(1));
});

// Example Resolved more than once
async function exampleResolvedMoreThanOnce() {
  try {
    return await new Promise((resolve, reject) => {
      resolve('exampleResolvedMoreThanOnce > First call');
      resolve('exampleResolvedMoreThanOnce > Swallowed resolve');
    });
  } catch {
    throw new Error('exampleResolvedMoreThanOnce > Failed');
  }
}
exampleResolvedMoreThanOnce().then((r) => {console.log(r)});

// Example Rejected more than once
async function exampleRejectedMoreThanOnce() {
  try {
    return await new Promise((resolve, reject) => {
      reject('exampleRejectedMoreThanOnce > First call');
      reject('exampleRejectedMoreThanOnce > Swallowed reject');
    });
  } catch {
    throw new Error('exampleRejectedMoreThanOnce > Failed');
  }
}
exampleRejectedMoreThanOnce().then((r) => {console.log(r)});

// Example Rejected after resolve.
async function exampleRejectedAfterResolve() {
  try {
    return await new Promise((resolve, reject) => {
      resolve('exampleRejectedAfterResolve > First call');
      reject('exampleRejectedAfterResolve > Swallowed reject');
    });
  } catch {
    throw new Error('exampleRejectedAfterResolve > Failed');
  }
}
exampleRejectedAfterResolve().then((r) => {console.log(r)});

// Example Resolve after reject.
async function exampleResolveAfterReject() {
  try {
    return await new Promise((resolve, reject) => {
      reject('exampleResolveAfterReject > First call');
      resolve('exampleResolveAfterReject > Swallowed reject');
    });
  } catch {
    throw new Error('exampleResolveAfterReject > Failed');
  }
}
exampleResolveAfterReject().then((r) => {console.log(r)});
