import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulasAbertasComponent } from './aulas-abertas.component';

describe('AulasAbertasComponent', () => {
  let component: AulasAbertasComponent;
  let fixture: ComponentFixture<AulasAbertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AulasAbertasComponent]
    });
    fixture = TestBed.createComponent(AulasAbertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
