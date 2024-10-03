import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmFormaComponent } from './film-forma.component';

describe('FilmFormaComponent', () => {
  let component: FilmFormaComponent;
  let fixture: ComponentFixture<FilmFormaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmFormaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
