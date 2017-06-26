import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsetMovieXdetailComponent } from './tabset-movie-xdetail.component';

describe('TabsetMovieXdetailComponent', () => {
  let component: TabsetMovieXdetailComponent;
  let fixture: ComponentFixture<TabsetMovieXdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsetMovieXdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsetMovieXdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
