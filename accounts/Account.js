export class Account {
  constructor(initialBalance, client, agency) {
    if (this.constructor == Account) {
      throw new Error('You not allowed to instance this class directly');
    }
    this._balance = initialBalance;
    this._client = client;
    this._agency = agency;
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
    throw new Error("this can't be called, because is a abstract method");
  }

  _withdraw(value, fee) {
    const amountWithdraw = fee * value;
    if (this._balance >= amountWithdraw) {
      this._balance -= amountWithdraw;
      return amountWithdraw;
    }
    return 0;
  }

  deposit(value) {
    this._balance += value;
  }

  transfer(value, account) {
    const amountWithdraw = this.withdraw(value);
    account.deposit(amountWithdraw);
  }
}
