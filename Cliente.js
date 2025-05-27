export class Client {
  constructor(name, id) {
    this.name = name;
    this._id = id;
  }

  get cpf() {
    return this._id;
  }
}
