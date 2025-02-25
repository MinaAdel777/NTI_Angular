import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthoService {
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  constructor(private _http: HttpClient) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.tokenSubject.next(token);
    }
  }

  get token(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  login(loginData: { email: string; password: string }): Observable<any> {
    return this._http
      .post<{ accessToken: string }>(
        'http://localhost:3000/users/login',
        loginData
      )
      .pipe(
        tap((res) => {
          const token = res.accessToken;
          if (token) {
            localStorage.setItem('accessToken', token);
            this.tokenSubject.next(token);
            console.log('Access Token:', token);
          }
        })
      );
  }

  getAccessToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  logout(): void {
    this.tokenSubject.next(null);
    localStorage.removeItem('accessToken');
    console.log('User logged out');
  }

  isLoggedIn(): boolean {
    return this.tokenSubject.value !== null;
  }

  decodeAccessToken(): any {
    const token = this.tokenSubject.value;
    if (token) {
      return jwtDecode<any>(token);
    } else {
      return null;
    }
  }
}
