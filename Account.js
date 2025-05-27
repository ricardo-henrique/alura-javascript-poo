export class Account {
  constructor(initialBalance, client, agency) {
    this._balance = initialBalance;
    this._client = client;
    this._agency = agency;
    this._accountType = accountType;
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
    let fee = 1;
    const amountWithdraw = fee * value;
    if (this._balance >= amountWithdraw) {
      this._balance -= amountWithdraw;
      return amountWithdraw;
    }
  }

  deposit(value) {
    this._balance += value;
  }

  transfer(value, account) {
    const amountWithdraw = this.withdraw(value);
    account.deposit(amountWithdraw);
  }
}
