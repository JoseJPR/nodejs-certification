/* eslint-disable import/no-extraneous-dependencies */

/**
 * Description: Module Exports and Require class with methods.
 */

/** Require generics dependences */
require('pretty-console-colors');

// Require module People
const People = require('./example-module.js');

// Instance People Class and create new Person.
const person = new People('me@josejpr.com');
// Show person profile.
console.log(person.get());
// Set severals data to person.
person.set(
  'Jose J.',
  'Pérez',
  '36',
);
// Show person profile again.
console.log(person.get());
