import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/model/film';

@Component({
  selector: 'app-jedan-film',
  templateUrl: './jedan-film.component.html',
  styleUrls: ['./jedan-film.component.css']
})
export class JedanFilmComponent implements OnInit {
  @Input() public film: Film;
  constructor() { }

  ngOnInit() {
   
  }
}
