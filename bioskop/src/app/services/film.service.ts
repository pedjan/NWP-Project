import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError as ObservableThrow } from 'rxjs';
import { of as ObservableOf } from 'rxjs';

import { Film } from '../model/film';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prikaz } from '../model/prikaz';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private filmovi: Film[];
  private apiUrl = 'http://localhost:8080/filmovi';


  constructor(private http: HttpClient) { 
  }

  getPrikaziZaFilm(id: string): Observable<Prikaz[]> {
    return this.http.get<Prikaz[]>(`${this.apiUrl}/prikaziZaFilm/`+id, {
      headers: new HttpHeaders()
    });
  }

  getFilmovi(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.apiUrl}/sviFilmovi`);
  }

  getFilm(id: string): Observable<Film> {
    return this.http.get<Film>(`${this.apiUrl}/getFilm/`+id, {
      headers: new HttpHeaders()
    });
    
  }

  createFilm(film: Film): Observable<any>{
    return this.http.post(`${this.apiUrl}/dodajFilm`, film);
  }
}
