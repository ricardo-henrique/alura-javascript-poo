export class Client {
  constructor(name, id, password) {
    this.name = name;
    this._id = id;
    this._password = password;
    this.authenticate = 1;
  }

  authenticate() {
    return true;
  }

  get cpf() {
    return this._id;
  }
}
