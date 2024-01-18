import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviewCardGridComponent } from './moview-card-grid.component';

describe('MoviewCardGridComponent', () => {
  let component: MoviewCardGridComponent;
  let fixture: ComponentFixture<MoviewCardGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviewCardGridComponent]
    });
    fixture = TestBed.createComponent(MoviewCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
