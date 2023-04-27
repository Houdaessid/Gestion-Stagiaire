/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  endpoint = `${this.apiUrl}/api/auth`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  options = {
    headers: this.headers,
    withCredentials: true,
  };
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}

  // Sign-in
  signIn(email: any, password: any): Observable<any> {
    return this.http
      .post<any>(
        `${this.endpoint}/login`,
        { username: email, password },
        this.options
      )
      .pipe(
        map((res: any) => {
          if (res) {
            localStorage.setItem('access_token', res.accessToken);
            this.getUserProfile().subscribe((res) => {
              this.currentUser = res;
              this.router.navigateByUrl('/account').then(() => {
                window.location.reload();
              });
            });
          }
        }),
        catchError((err) => {
          return of(false);
        })
      );
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    const api = `${this.endpoint}/logout`;
    this.http.get(api, this.options).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
    const removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/']);
    }
  }

  // User profile
  getUserProfile(): Observable<any> {
    const api = `${this.endpoint}/me`;
    return this.http.get(api, this.options).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  // Forgot Password
  forgotPassword(email: any): Observable<any> {
    return this.http
      .post<any>(`${this.endpoint}/forgot-password`, { email }, this.options)
      .pipe(
        map((res: any) => {
          console.log({ res });

          return res;
        }),
        catchError((err) => {
          return of(false);
        })
      );
  }

  // reset password
  resetPassword(
    password: string,
    password_confirm: string,
    token: string
  ): Observable<any> {
    return this.http
      .post<any>(
        `${this.endpoint}/reset-password`,
        { password, password_confirm, token },
        this.options
      )
      .pipe(
        map((res: any) => {
          console.log({ res });

          return res;
        }),
        catchError((err) => {
          return of(false);
        })
      );
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
