import { Client } from './Client.js';
import { Manager } from './employees/Manager.js';
import { Director } from './employees/Director.js';
import { AuthSystem } from './AuthSystem.js';

const director = new Director('Beltrano', 10000, 12345678900);
director.registerPassword('123456');
const manager = new Manager('Fulano', 5000, 1239876528);
manager.registerPassword('123987');

const client = new Client('Sicrano', 64343515001, '456');

const isAuthenticatedDirector = AuthSystem.login(director, '123456');
const isAuthenticatedManager = AuthSystem.login(manager, '123987');
const isAuthenticatedClient = AuthSystem.login(client, '456');

console.log('Diretor: ', isAuthenticatedDirector);
console.log('Gerente: ', isAuthenticatedManager);
console.log('Cliente: ', isAuthenticatedClient);
