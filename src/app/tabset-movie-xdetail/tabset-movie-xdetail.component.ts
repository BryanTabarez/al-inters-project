import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

import { TmdbService } from '../tmdb.service';
import { Movie } from '../movie';
import { Person } from '../person';
import { ModalComponent } from '../_modal/modal.component';

@Component({
  selector: 'app-tabset-movie-xdetail',
  templateUrl: './tabset-movie-xdetail.component.html',
  styleUrls: ['./tabset-movie-xdetail.component.css']
})
export class TabsetMovieXdetailComponent implements OnInit, OnChanges {
  @Input() movie: Movie;
  similar_movies: Movie[];
  recommendations: Movie[];
  cast: Person[];
  crew: Person[];

  constructor(
    private apiService: TmdbService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: any) {
    if (changes.movie.currentValue !== undefined) {
      this.updateSimilarMovies();
      this.updateRecommendations();
      this.updateCredits();
    }
  }

  private updateSimilarMovies() {
    this.apiService.getSimilarMovies(this.movie.id)
      .then(data => this.similar_movies = data.results)
  }

  private updateRecommendations() {
    this.apiService.getRecommendationsMovies(this.movie.id)
      .then(data => this.recommendations = data.results)
  }

  private updateCredits() {
    this.apiService.getCreditsMovie(this.movie.id)
      .then(data => {
        this.crew = data.crew;
        this.cast = data.cast
      })
  }

}
