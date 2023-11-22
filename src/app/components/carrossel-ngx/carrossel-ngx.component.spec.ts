import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselNgxComponent } from './carrossel-ngx.component';

describe('SlideAulasComponent', () => {
  let component: CarrosselNgxComponent;
  let fixture: ComponentFixture<CarrosselNgxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrosselNgxComponent]
    });
    fixture = TestBed.createComponent(CarrosselNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
