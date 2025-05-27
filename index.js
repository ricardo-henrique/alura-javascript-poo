import { Client } from './Cliente.js';
import { SavingsAccount } from './accounts/SavingsAccount.js';
import { ChainAccount } from './accounts/ChainAccount.js';
import { Account } from './account.js';

const client1 = new Client('Fulano', 11122233309);

const chainAccountFulano = new Account(0, client1, 1001);
chainAccountFulano.deposit(500);
chainAccountFulano.withdraw(100);

const savingsAccount = new Account(50, client1, 1001);

console.log(savingsAccount);
console.log(chainAccountFulano);
