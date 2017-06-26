import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() page: number;
  @Input() totalPages: number;
  @Input() totalResults: number;
  @Output() onChangePage = new EventEmitter<number>(true);

  constructor() { }

  ngOnInit() {
  }

  private previousPage() {
    const previous = this.page - 1;
    if (previous <= this.totalPages) {
      this.onChangePage.emit(previous);
    }
  }

  private nextPage() {
    const next = this.page + 1;
    if (next <= this.totalPages) {
      this.onChangePage.emit(next);
    }
  }

}
