import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Film } from 'src/app/model/film';
import { Prikaz } from 'src/app/model/prikaz';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-detalji',
  templateUrl: './film-detalji.component.html',
  styleUrls: ['./film-detalji.component.css']
})
export class FilmDetaljiComponent implements OnInit {
  public film: Film;
  public prikazi: Prikaz[];
  constructor(private filmService: FilmService, private route: ActivatedRoute) { 
    this.initializeFilm();
    this.prikazi = [];
  }

  initializeFilm() {
    this.film = {
      id: -1,
      ime: '',
      reziser: '',
      zanr: ''
    };
  }
  ngOnInit() {
    const filmId = this.route.snapshot.paramMap.get('id') as string;
    this.filmService.getFilm(filmId as string).subscribe(film => this.film = film);
    this.filmService.getPrikaziZaFilm(filmId as string).subscribe(prikazi => this.prikazi = prikazi);
  }
}
