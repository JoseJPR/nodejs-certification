/**
 * Description: Module.
 */

class People {
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

module.exports = People;
