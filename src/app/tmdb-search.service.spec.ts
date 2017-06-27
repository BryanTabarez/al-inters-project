import { TestBed, inject } from '@angular/core/testing';

import { TmdbSearchService } from './tmdb-search.service';

describe('TmdbSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmdbSearchService]
    });
  });

  it('should be created', inject([TmdbSearchService], (service: TmdbSearchService) => {
    expect(service).toBeTruthy();
  }));
});
