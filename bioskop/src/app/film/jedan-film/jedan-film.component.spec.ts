import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JedanFilmComponent } from './jedan-film.component';

describe('JedanFilmComponent', () => {
  let component: JedanFilmComponent;
  let fixture: ComponentFixture<JedanFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JedanFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JedanFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
