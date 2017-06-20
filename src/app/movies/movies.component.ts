import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MoviesResult } from '../movies-result';

import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  result: MoviesResult;
  movies: Movie[];
  selectedMovie: Movie;
  apiImg: string;
  currentPage: number;
  
  constructor(
    private apiService: TmdbService) { }
  
  ngOnInit(): void {
    this.getMovies();
    this.apiImg = this.apiService.getApiImg();
  }
  
  getMovies(): void {
    this.apiService.getMovies().then(data => 
      {this.result = data; this.movies = data.results; console.log(this.result);});
  }
  
  changePage(page: number): void {
    this.currentPage = page;
    console.log("the page selected is", page);
  }

}
