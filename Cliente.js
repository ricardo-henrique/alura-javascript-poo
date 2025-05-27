export class Client {
  name;
  _id;

  constructor(name, id) {
    this.name = name;
    this._id = id;
  }

  get cpf() {
    return this._id;
  }
}
