class Client {
  name;
  id;
}

class chainAccount {
  agency;
  balance;

  withdraw(valor) {
    if (this.balance >= valor) {
      this.balance -= valor;
    }
  }

  deposit(value) {
    if (value > 0) {
      this.balance += value;
    }
  }
}

const client1 = new Client();
client1.name = 'Fulano';
client1.id = 11122233309;

const client2 = new Client();
client2.name = 'Sicrano';
client2.id = 44455522278;

const chainAccountFulano = new chainAccount();
chainAccountFulano.balance = 0;
chainAccountFulano.agency = 1001;

chainAccountFulano.deposit(100);
chainAccountFulano.deposit(200);
chainAccountFulano.deposit(-1);

chainAccountFulano.withdraw(50);

console.log(chainAccountFulano.balance);
console.log(client1);
console.log(client2);
