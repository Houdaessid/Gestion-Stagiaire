import { Injectable } from '@angular/core';

const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  logout(): void {
    window.localStorage.clear();
  }

  public isLoggedIn(): boolean {
    const token = window.localStorage.getItem(USER_KEY);
    if (token) {
      return true;
    }
    return false;
  }
}