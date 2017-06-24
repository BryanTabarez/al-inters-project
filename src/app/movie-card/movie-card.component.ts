import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { API_IMG } from '../movie.constants';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  apiImg = API_IMG;

  constructor() { }

  ngOnInit() {
  }

}
