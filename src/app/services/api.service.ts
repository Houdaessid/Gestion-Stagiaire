import { Stagiaire } from './../stagiaire';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, public router: Router) {}

  // Sign-in
  signIn(email: any, password: any): Observable<any> {
    const headers: any = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .post(
        'http://127.0.0.1:8000/api/authentication.php',
        { email, password },
        { headers: headers }
      )
      .pipe(
        map((res: any) => {
          if (res) {
            localStorage.setItem('user', res.data[0]);
            this.router.navigateByUrl('/').then(() => {
              window.location.reload();
            });
          }
        }),
        catchError((err) => {
          return of(false);
        })
      );
  }

  getToken() {
    return localStorage.getItem('user');
  }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('user');
    return authToken !== null ? true : false;
  }

  insertStagiaire(data: Stagiaire): Observable<any> {
    const headers: any = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post('http://127.0.0.1:8000/api/insert.php', 
    {
      nom: data.nom,
      prenom: data.prenom,
      email: data.email,
      telephone: data.telephone,
      adresse: data.adresse,
      specialite: data.specialite,
      message: data.message,
      status: 'en attente',
    },
    { headers: headers }
    ).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }

  getStagiaires(): Observable<any> {
    const headers: any = new Headers({ 'Content-Type': 'application/json' });
    return this.http.get('http://127.0.0.1:8000/api/list.php',{headers}).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }

  deleteStagiaire(id: any): Observable<any> {
    const headers: any = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .post('http://127.0.0.1:8000/api/supprimer.php', { id }, { headers })
      .pipe(
        map((res: any) => {
          return res || {};
        }),
        catchError((err: any) => {
          return throwError(err);
        })
      );
  }

  accepterStagiaire(id: any): Observable<any> {
    const headers: any = new Headers({ 'Content-Type': 'application/json' });
    return this.http
      .post('http://127.0.0.1:8000/api/accepter.php', { id, status: 'accepter' }, { headers })
      .pipe(
        map((res: any) => {
          return res || {};
        }),
        catchError((err: any) => {
          return throwError(err);
        })
      );
  }
}
