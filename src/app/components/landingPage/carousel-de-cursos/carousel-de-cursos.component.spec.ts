import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDeCursosComponent } from './carousel-de-cursos.component';

describe('CarouselDeCursosComponent', () => {
  let component: CarouselDeCursosComponent;
  let fixture: ComponentFixture<CarouselDeCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselDeCursosComponent]
    });
    fixture = TestBed.createComponent(CarouselDeCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
