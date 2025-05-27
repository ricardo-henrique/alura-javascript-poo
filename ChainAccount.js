import { Client } from './Cliente.js';

export class ChainAccount {
  static numberOfAccounts = 0;
  agency;
  _client;
  // #balance = 0;
  _balance = 0;

  constructor(client, agency) {
    this.agency = agency;
    this.client = client;
    ChainAccount.numberOfAccounts += 1;
  }

  set client(newValue) {
    if (newValue instanceof Client) {
      this._client = newValue;
    }
  }
  get client() {
    return this._client;
  }

  get balance() {
    return this._balance;
  }

  withdraw(value) {
    if (this._balance >= value) {
      this._balance -= value;
      return value;
    }
  }

  deposit(value) {
    if (value <= 0) return;
    this._balance += value;
  }

  transfer(value, account) {
    const amountWithdraw = this.withdraw(value);
    account.deposit(amountWithdraw);
  }
}
