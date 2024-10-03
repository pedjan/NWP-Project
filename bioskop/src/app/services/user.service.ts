import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { UserStoreService } from './user-store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8880/korisnik';

  constructor(private http: HttpClient, private userStore: UserStoreService) { 
  }

  login(korIme: string, sifra: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, {
      korIme: korIme,
      sifra: sifra
    }).pipe(map((resp: any) => {
      this.userStore.token = resp.token;
      return resp;
    }));
  }

  register(user: User): Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  logout() {
    this.userStore.token = "";  
  }
}
