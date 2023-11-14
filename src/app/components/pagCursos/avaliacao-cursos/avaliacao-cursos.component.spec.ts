import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoCursosComponent } from './avaliacao-cursos.component';

describe('AvaliacaoCursosComponent', () => {
  let component: AvaliacaoCursosComponent;
  let fixture: ComponentFixture<AvaliacaoCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvaliacaoCursosComponent]
    });
    fixture = TestBed.createComponent(AvaliacaoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
