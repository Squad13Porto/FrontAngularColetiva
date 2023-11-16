import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprenderAquiComponent } from './aprender-aqui.component';

describe('AprenderAquiComponent', () => {
  let component: AprenderAquiComponent;
  let fixture: ComponentFixture<AprenderAquiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprenderAquiComponent]
    });
    fixture = TestBed.createComponent(AprenderAquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
