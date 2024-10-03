import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/app/model/film';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-lista',
  templateUrl: './film-lista.component.html',
  styleUrls: ['./film-lista.component.css']
})
export class FilmListaComponent implements OnInit {
  public filmovi$: Observable<Film[]>;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmovi$ = this.filmService.getFilmovi();
  }

}
