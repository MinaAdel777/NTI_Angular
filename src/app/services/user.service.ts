import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthoService } from './autho.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient, private _authS: AuthoService) {}
  apiURL = 'http://localhost:3000/usertype';

  addUserType(data: any): Observable<any> {
    let token = '';
    this._authS.getAccessToken().subscribe((data) => {
      if (data) token = data;
    });
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this._http.post<any>(this.apiURL, data, { headers });
  }
}
