import 'rxjs/add/operator/switchMap';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { ModalComponent } from '../_modal/modal.component';
import { Movie } from '../movie';
import { TmdbService } from '../tmdb.service';
import { API_IMG } from '../movie.constants';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  videoUrl: SafeUrl;
  dangerousVideoUrl: string;
  apiImg = API_IMG;

  constructor(
    private apiService: TmdbService,
    private route: ActivatedRoute,
    private location: Location,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.apiService.getMovie(+params['id']))
      .subscribe(
        movie => {
          this.movie = movie;
          // this.getTrailerUrl(this.movie.id);
        } )
  }

  goBack(): void {
    // this.location.back(); // <- Does'nt work after call the trailer modal
    this.router.navigate(['/movies']);
  }

  getTrailerUrl(movie_id: number): void {
    this.apiService.getMovieVideos(movie_id).then(
      data => {
        if (data[0].key !== undefined) {
          this.updateVideoUrl(data[0].key);
        }
      })
  }

  updateVideoUrl(video_key: string) {
    const url = 'https://www.youtube.com/embed/' + video_key;
    if (url !== this.dangerousVideoUrl) {
      this.dangerousVideoUrl = url;
      this.videoUrl =
          this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }


}
