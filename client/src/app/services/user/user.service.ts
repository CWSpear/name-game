import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  key: string = 'name-game::user-token';

  constructor() {}

  getToken(): string {
    let token = window.localStorage.getItem(this.key);

    if (!token) {
      token = Math.random().toString(36).substring(2);
      window.localStorage.setItem(this.key, token);
    }

    return token;
  }
}
