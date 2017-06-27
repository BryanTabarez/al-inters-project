import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // third-party

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TmdbService } from './tmdb.service';
import { TmdbSearchService } from './tmdb-search.service';

import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ModalComponent } from './_modal/modal.component';
import { TabsetMovieXdetailComponent } from './tabset-movie-xdetail/tabset-movie-xdetail.component';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { PaginationComponent } from './_pagination/pagination.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MovieCardComponent,
    ModalComponent,
    TabsetMovieXdetailComponent,
    MovieTileComponent,
    PaginationComponent,
    PersonCardComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [TmdbService, TmdbSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
