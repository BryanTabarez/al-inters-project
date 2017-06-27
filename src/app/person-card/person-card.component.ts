import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { API_IMG } from '../movie.constants';

import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {
  @Input() person: Person;
  apiImg = API_IMG;
  infoPerson: Person;

  constructor(
    private apiService: TmdbService,
  ) { }

  ngOnInit() {
  }

  getInfoPerson(person_id: number) {
    this.apiService.getPersonDetails(person_id).then(
      data => this.infoPerson = data
    )
  }

}
