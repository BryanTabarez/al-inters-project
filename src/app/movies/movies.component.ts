import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MoviesResult } from '../movies-result';
import { SORTING_OPTIONS } from '../movie.constants';
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
  sorting_option = SORTING_OPTIONS;
  selectedSort = this.sorting_option[0];

  constructor(
    private apiService: TmdbService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    // this.currentPage = JSON.parse(localStorage.getItem('currentPage')).page;
    this.apiService.getMovies(this.selectedSort.id, this.currentPage).then(data => {this.result = data; this.movies = data.results; });
  }

  changePage(page: any): void {
    // localStorage.setItem('currentPage', JSON.stringify({'page': page}));
    this.currentPage = page;
    this.getMovies();
  }

  changeSort(sort: any): void {
    console.log("EL NUEVO ORDEN ES", sort);
    this.selectedSort = sort;
    this.getMovies();
  }

}
