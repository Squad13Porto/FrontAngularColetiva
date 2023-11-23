import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulasPilulasComponent } from './aulas-pilulas.component';

describe('AulasPilulasComponent', () => {
  let component: AulasPilulasComponent;
  let fixture: ComponentFixture<AulasPilulasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AulasPilulasComponent]
    });
    fixture = TestBed.createComponent(AulasPilulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
