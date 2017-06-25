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
  currentPage: number;

  constructor(
    private apiService: TmdbService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    // this.currentPage = JSON.parse(localStorage.getItem('currentPage')).page;
    this.apiService.getMovies(undefined, this.currentPage).then(data => {this.result = data; this.movies = data.results; });
  }

  changePage(page: any): void {
    // localStorage.setItem('currentPage', JSON.stringify({'page': page}));
    this.currentPage = page;
    this.getMovies();
  }

  // changeSort(sort: number): void {
  //   console.log("EL NUEVO ORDEN ES", sort);
  // }

}
