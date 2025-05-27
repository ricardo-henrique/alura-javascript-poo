import { Account } from '../account.js';
import { Client } from '../Cliente.js';

export class ChainAccount extends Account {
  static numberOfAccounts = 0;

  constructor(client, agency) {
    this.agency = agency;
    this.client = client;
    this._balance = 0;
    ChainAccount.numberOfAccounts += 1;
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
