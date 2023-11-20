import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCursosComponent } from './about-us-cursos.component';

describe('AboutUsCursosComponent', () => {
  let component: AboutUsCursosComponent;
  let fixture: ComponentFixture<AboutUsCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsCursosComponent]
    });
    fixture = TestBed.createComponent(AboutUsCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
