export class Employee {
  constructor(name, salary, id) {
    if (this.constructor == Employee) {
      throw new Error('You not allowed to instance this class directly');
    }
    this._name = name;
    this._salary = salary;
    this._id = id;

    this._bonus = 1;
    this._password;
  }

  authenticate(password) {
    return password == this._password;
  }

  registerPassword(password) {
    this._password = password;
  }
}
