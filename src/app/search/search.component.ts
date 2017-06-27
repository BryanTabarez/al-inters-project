import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { TmdbSearchService } from '../tmdb-search.service';
import { API_IMG } from '../movie.constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: Observable<any[]>;
  private searchTerms = new Subject<string>();
  apiImg = API_IMG;

  constructor(
    private searchService: TmdbSearchService,
    private router: Router
  ) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.results = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        ? this.searchService.search(term)
        : Observable.of<any[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<any[]>([]);
      });
  }

  gotoDetail(result: any): void {
    if ( result.media_type === 'movie' ) {
      const link = ['/movie', result.id];
      this.router.navigate(link);
    }
    this.searchTerms.next('');
  }

}
