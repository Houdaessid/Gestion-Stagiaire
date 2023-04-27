import { Injectable } from '@angular/core';

const TOKEN_KEY = 'access_token';
const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.localStorage.clear();
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
      return true;
    }
    return false;
  }
}