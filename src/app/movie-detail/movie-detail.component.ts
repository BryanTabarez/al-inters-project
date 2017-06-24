import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Movie } from '../movie';
import { TmdbService } from '../tmdb.service';
import { API_IMG } from '../movie.constants';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  apiImg = API_IMG;

  constructor(
    private apiService: TmdbService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.route.params
      .switchMap((params: Params) => this.apiService.getMovie(+params['id']))
      .subscribe(movie => this.movie = movie);
    
  }

  
}
