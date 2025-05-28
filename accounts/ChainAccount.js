import { Account } from './Account.js';

export class ChainAccount extends Account {
  static numberOfAccounts = 0;

  constructor(client, agency) {
    super(0, client, agency);
    ChainAccount.numberOfAccounts += 1;
  }

  // overwriting the withdraw's behavior
  withdraw(value) {
    let tax = 1.1;
    return this._withdraw(value, tax);
  }
}
