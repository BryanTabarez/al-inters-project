import { Component, OnInit, Input } from '@angular/core';

import { TmdbService } from '../tmdb.service';
import { Movie } from '../movie';
import { ModalComponent } from '../_modal/modal.component';
import { API_IMG } from '../movie.constants';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent implements OnInit {
  @Input() movie: Movie;
  apiImg = API_IMG;

  constructor(
    private apiService: TmdbService
  ) { }

  ngOnInit() {
  }

}
