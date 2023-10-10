import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaColetivaComponent } from './escola-coletiva.component';

describe('EscolaColetivaComponent', () => {
  let component: EscolaColetivaComponent;
  let fixture: ComponentFixture<EscolaColetivaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscolaColetivaComponent]
    });
    fixture = TestBed.createComponent(EscolaColetivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
