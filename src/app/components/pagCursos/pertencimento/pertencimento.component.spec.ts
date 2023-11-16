import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PertencimentoComponent } from './pertencimento.component';

describe('PertencimentoComponent', () => {
  let component: PertencimentoComponent;
  let fixture: ComponentFixture<PertencimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PertencimentoComponent]
    });
    fixture = TestBed.createComponent(PertencimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
