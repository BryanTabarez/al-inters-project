import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';
import { API_IMG } from '../movie.constants';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {
  @Input() person: Person;
  apiImg = API_IMG;

  constructor() { }

  ngOnInit() {
  }

}
