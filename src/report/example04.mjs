/**
 * Description: Show errors and reports via EventEmitter.
 */

/** Import generics dependences */
import EventEmitter from 'events';

class MyEmitterLog extends EventEmitter {}

const myEmitterLog = new MyEmitterLog();
myEmitterLog.on('eventLog', (data, err) => {
  console.log('LOG:',
    {
      message: data.javascriptStack.message,
      stack: data.javascriptStack.stack,
      dumpEventTime: data.header.dumpEventTime,
      dumpEventTimeStamp: data.header.dumpEventTimeStamp,
      err,
    });
});

try {
  noFoundFunction();
} catch (err) {
  myEmitterLog.emit('eventLog', process.report.getReport(), err.message);
}
