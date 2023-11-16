import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacoesComponent } from './certificacoes.component';

describe('CertificacoesComponent', () => {
  let component: CertificacoesComponent;
  let fixture: ComponentFixture<CertificacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificacoesComponent]
    });
    fixture = TestBed.createComponent(CertificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
