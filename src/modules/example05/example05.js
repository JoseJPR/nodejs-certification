/* eslint-disable import/no-extraneous-dependencies */

/**
 * Description: Module Exports and Require class extends with static method.
 */

/** Require generics dependences */
require('pretty-console-colors');

// Require module People
const { Employee } = require('./example-module.js');

// Instance People Class and create new Person.
const employee = new Employee('me@josejpr.com');
// Show employee profile.
console.log(employee.get());

// Set severals data to employee.
employee.set(
  'Jose J.',
  'Pérez',
  '99',
);
// Show employee profile again.
console.log(employee.get());

// Set departament.
employee.setDepartament('Cloud');
// Show employee profile again.
console.log(employee.get());

// Generate Random Id with static method.
const id = Employee.createRandomId();
// Set id.
employee.setId(id);
// Show employee profile again.
console.log(employee.get());
