import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { Movie } from './movie';
import { MoviesResult } from './movies-result';
import { API_URL, API_KEY } from './movie.constants';

@Injectable()
export class TmdbSearchService {

  constructor(private http: Http) { }

  search(query: string): Observable<any[]> {
    const queryUrl = `${API_URL}search/multi?query=${query}&api_key=${API_KEY}`;
    return this.http.get(queryUrl)
      .map(response => response.json().results as any[]);
  }

}
