import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-forma',
  templateUrl: './film-forma.component.html',
  styleUrls: ['./film-forma.component.css']
})
export class FilmFormaComponent {
  public film: Film;
  public uspesno: boolean;
  constructor(private filmService: FilmService) {
    this.initializeFilm();
  }

  initializeFilm() {
    this.film = {
      id: -1,
      ime: '',
      reziser: '',
      zanr: ''
    };
  }
  createFilm(filmForma: NgForm) {
    if (filmForma.valid) {
      this.uspesno = true;
      this.filmService.createFilm(this.film)
      .subscribe((result: any) => { 
        this.initializeFilm();
      });
    }
  }
}
