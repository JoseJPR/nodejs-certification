/* eslint-disable import/first */
/* eslint-disable import/no-extraneous-dependencies */

/**
 * Description: Export and Import class extends with static method.
 */

/** Import generics dependences */
import 'pretty-console-colors';

// Import module People
import { Employee } from './example-module.js';

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
