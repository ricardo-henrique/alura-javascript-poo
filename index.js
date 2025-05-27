import { Client } from './Cliente.js';
import { ChainAccount } from './chainAccount.js';

const client1 = new Client('Fulano', 11122233309);
const client2 = new Client('Sicrano', 44411199934);

const chainAccountFulano = new ChainAccount(client1, 1001);
chainAccountFulano.deposit(500);

const account2 = new ChainAccount(client2, 102);

chainAccountFulano.transfer(200, account2);
console.log(ChainAccount.numberOfAccounts);
