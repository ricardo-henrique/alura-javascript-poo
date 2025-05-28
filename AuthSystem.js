import { Client } from './Client.js';

export class AuthSystem {
  static login(authenticable, password) {
    if (AuthSystem.isAuthenticable(authenticable)) {
      return authenticable.authenticate(password);
    }
    return false;
  }

  static isAuthenticable(authenticable) {
    return 'authenticate' in authenticable && authenticable.authenticate instanceof Function;
  }
}
