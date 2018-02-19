import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieExtendedComponent } from './movie-extended.component';

describe('MovieExtendedComponent', () => {
  let component: MovieExtendedComponent;
  let fixture: ComponentFixture<MovieExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
