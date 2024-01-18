import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavMovieComponent } from './fav-movie.component';

describe('FavMovieComponent', () => {
  let component: FavMovieComponent;
  let fixture: ComponentFixture<FavMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavMovieComponent]
    });
    fixture = TestBed.createComponent(FavMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
