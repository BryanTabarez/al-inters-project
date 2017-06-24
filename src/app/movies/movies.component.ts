import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MoviesResult } from '../movies-result';

import { TmdbService } from '../tmdb.service';
import { API_IMG } from '../movie.constants';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  result: MoviesResult;
  movies: Movie[];
  currentPage: number;
  apiImg = API_IMG;
  
  constructor(
    private apiService: TmdbService) { }
  
  ngOnInit(): void {
    this.getMovies();
  }
  
  getMovies(): void {
    
    console.log("VALOR DE moviesComponent", JSON.parse(localStorage.getItem("moviesComponent")));
    this.apiService.getMovies(undefined, this.currentPage).then(data => 
      {this.result = data; this.movies = data.results; console.log(this.result);});
  }
  
  changePage(page: number): void {
    localStorage.setItem("moviesComponent", JSON.stringify({page: page}));
    this.currentPage = page;
    this.getMovies();
  }
  
  changeSort(sort: number): void {
    console.log("EL NUEVO ORDEN ES", sort);
  }

}
