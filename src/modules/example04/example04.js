/* eslint-disable import/no-extraneous-dependencies */

/**
 * Description: Module Exports and Require class extends with methods.
 */

/** Require generics dependences */
require('pretty-console-colors');

// Require module Employee
const { Employee } = require('./example-module.js');

// Instance Employee Class and create new Person.
const employee = new Employee('me@josejpr.com');
// Show employee profile.
console.log(employee.get());

// Set severals data to employee.
employee.set(
  'Jose J.',
  'Pérez',
  '36',
);
// Show employee profile again.
console.log(employee.get());

// Set departament.
employee.setDepartament('Devops');
// Show employee profile again.
console.log(employee.get());
