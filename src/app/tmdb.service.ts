import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map'

import 'rxjs/add/operator/toPromise';

import { Movie } from './movie';
import { MoviesResult } from './movies-result';

@Injectable()
export class TmdbService {

  constructor(private http: Http) { }
  
  /**
   * TMDB API
   */
  private apiUrl = "//api.themoviedb.org/3/";
  private apiKey = "802cd9bec58e75474a66bfa717fd1106";
  private apiImg = "//image.tmdb.org/t/p/w500";
  
  getApiImg(): string {
    return this.apiImg;
  }
  
  // Optional and Default Parameters
  getMovies(sortBy?: string, page?: number, includeAdult?: string): Promise<MoviesResult> {
		let pathDiscover = 'discover/movie';
		
    if ( sortBy ) {
        sortBy = 'popularity.desc';
    }
    if ( page ) {
        page = 1;
    }
    if ( includeAdult ) {
        includeAdult = 'false';
    }
		
		const url  = `${this.apiUrl}${pathDiscover}?page=${page}&include_adult=${includeAdult}&api_key=${this.apiKey}`;
		
		return this.http.get(url)
		       .toPromise()
		       .then(response => response.json() as MoviesResult)
        	 .catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  getMovie(movie_id: number): Promise<any> {
    let pathMovie = 'movie';
    // var uri = serviceBase.url + '/movie/' + movie + '?api_key=' + serviceBase.apiKey +
    //     '&append_to_response=alternative_titles,credits,releases,videos,similar,reviews,images';
    const url = `${this.apiUrl}${pathMovie}/${movie_id}?api_key=${this.apiKey}`;
    
    return this.http.get(url)
           .toPromise()
           .then(response => {console.log("full movie", response.json()); return response.json() as Movie})
           .catch(this.handleError);
  }

}
