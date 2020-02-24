/* eslint-disable max-classes-per-file */

/**
 * Description: Module.
 */

class Profile {
  constructor(email) {
    this.email = email;
  }

  set(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    return 'Great, setted!';
  }

  get() {
    return this;
  }
}

class Employee extends Profile {
  setDepartament(departament) {
    this.departament = departament;
  }

  setId(id) {
    this.id = id;
  }

  static createRandomId() {
    return Date.now();
  }
}

export {
  Profile,
  Employee,
};
