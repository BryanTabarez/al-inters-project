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
    let filters = JSON.parse(localStorage.getItem('currentFilters'));
    if (filters !== null) {
      this.currentPage = filters['page'];
      this.selectedSort = filters['sort'];
    } else {
      filters = {'page': 1, 'sort': this.sorting_option[0]};
      localStorage.setItem('currentFilters', JSON.stringify(filters));
    }
    this.getMovies();
  }

  getMovies(): void {
    this.apiService.getMovies(this.selectedSort.id, this.currentPage).then(data => {this.result = data; this.movies = data.results; });
  }

  changePage(page: any): void {
    this.updateFilter('page', page);
    this.currentPage = page;
    this.getMovies();
  }

  changeSort(sort: any): void {
    this.updateFilter('sort', sort);
    this.selectedSort = sort;
    this.getMovies();
  }

  private updateFilter(key: string, value: any) {
    let filters = JSON.parse(localStorage.getItem('currentFilters'));
    filters[key] = value;
    localStorage.setItem('currentFilters', JSON.stringify(filters));
  }

}
