/**
 * Description: fork function.
 */

/** Import generics dependences */
import { fork } from 'child_process';
import path from 'path';
import 'pretty-console-colors';

const __dirname = path.resolve();

// Launch fork functions, send message from parent to child and child to parent.
const fncFork = () => {
  console.time('[fncFork]');

  // Declare array subProcesses with two forks functions.
  const subProcesses = [
    fork(`${__dirname}/src/child-processes/example07-sub01.js`),
    fork(`${__dirname}/src/child-processes/example07-sub02.js`),
  ];

  // Iterate in subProcess array for launch all fork functions.
  subProcesses.forEach((subProcess, index) => {
    // For get message from CHILD process.
    subProcess.on('message', (m) => {
      console.log('PARENT got message:', m);
    });

    /**
     * For send message to CHILD process.
     *
     * We need include .send function into setTimeout because
     * child don´t recibed this message without this.
     *
     * It isn't necessary if we don't work with mjs. :|
     */
    setTimeout(() => {
      subProcess.send({ hello: `Process ${index}` });
    }, 100);

    // Set time end when forEach finish.
    if (index === (subProcesses.length - 1)) {
      console.timeEnd('[fncFork]');
    }
  });
};
fncFork();
