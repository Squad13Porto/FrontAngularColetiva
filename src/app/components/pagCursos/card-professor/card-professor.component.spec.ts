import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfessorComponent } from './card-professor.component';

describe('CardProfessorComponent', () => {
  let component: CardProfessorComponent;
  let fixture: ComponentFixture<CardProfessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardProfessorComponent]
    });
    fixture = TestBed.createComponent(CardProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
