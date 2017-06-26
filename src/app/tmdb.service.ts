import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map'

import 'rxjs/add/operator/toPromise';

import { Movie } from './movie';
import { MoviesResult } from './movies-result';
import { API_URL, API_KEY } from './movie.constants';

@Injectable()
export class TmdbService {

  constructor(private http: Http) { }

  // Optional and Default Parameters
  // sort_by, page, year, with_genres , year?: number, with_genres: string
  getMovies(sortBy?: string, page?: number, includeAdult?: boolean): Promise<MoviesResult> {
    if ( sortBy == null ) {
        sortBy = 'popularity.desc';
    }
    if ( page == null ) {
        page = 1;
    }
    if ( includeAdult == null) {
      includeAdult = false;
    }
    const pathDiscover = 'discover/movie';
    const params: string = [
      `api_key=${API_KEY}`,
      `page=${page}`,
      `sort_by=${sortBy}`,
      `include_adult=${includeAdult}`
    ].join('&');
    const queryUrl = `${API_URL}${pathDiscover}?${params}`;
    return this.http.get(queryUrl)
          .toPromise()
          .then(response => response.json() as MoviesResult)
          .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getMovie(movie_id: number): Promise<Movie> {
    const pathMovie = 'movie';
    // var uri = serviceBase.url + '/movie/' + movie + '?api_key=' + serviceBase.apiKey +
    //     '&append_to_response=alternative_titles,credits,releases,videos,similar,reviews,images';
    const url = `${API_URL}${pathMovie}/${movie_id}?api_key=${API_KEY}`;

    return this.http.get(url)
           .toPromise()
           .then(response => response.json() as Movie)
           .catch(this.handleError);
  }

  // TODO: define Video class
  getMovieVideos(movie_id: number): Promise<any> {
    const url = `${API_URL}movie/${movie_id}/videos?api_key=${API_KEY}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().results)
      .catch(this.handleError);
  }

  getSimilarMovies(movie_id: number): Promise<MoviesResult> {
    const url = `${API_URL}movie/${movie_id}/similar?api_key=${API_KEY}`;
    return this.http.get(url)
           .toPromise()
           .then(response => response.json() as MoviesResult)
           .catch(this.handleError);
  }

  getRecommendationsMovies(movie_id: number): Promise<MoviesResult> {
    const url = `${API_URL}movie/${movie_id}/recommendations?api_key=${API_KEY}`;
    return this.http.get(url)
           .toPromise()
           .then(response => response.json() as MoviesResult)
           .catch(this.handleError);
  }

  getCreditsMovie(movie_id: number): Promise<any> {
    const credits = '/credits';
    const url = `${API_URL}movie/${movie_id}${credits}?api_key=${API_KEY}`;
    return this.http.get(url)
           .toPromise()
           .then(response => response.json())
           .catch(this.handleError);
  }

}
