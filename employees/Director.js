import { Employee } from './Employee.js';

export class Director extends Employee {
  constructor(name, salary, id) {
    super(name, salary, id);
    this._bonus = 2;
  }
}
