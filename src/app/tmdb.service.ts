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
  getMovies(sortBy?: string, page?: number): Promise<MoviesResult> {
    const pathDiscover = 'discover/movie';

    if ( sortBy == null ) {
        sortBy = 'popularity.desc';
    }
    if ( page == null ) {
        page = 1;
    }

    const url  = `${API_URL}${pathDiscover}?sort_by=${sortBy}&page=${page}&api_key=${API_KEY}`;
    return this.http.get(url)
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
           .then(response => {console.log('full movie', response.json()); return response.json() as Movie})
           .catch(this.handleError);
  }

  // TODO: define Video class
  getMovieVideos(movie_id: number): Promise<any> {
    const videoUrl = '/videos';
    const url = `${API_URL}movie/${movie_id}${videoUrl}?api_key=${API_KEY}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().results)
      .catch(this.handleError);
  }

}
