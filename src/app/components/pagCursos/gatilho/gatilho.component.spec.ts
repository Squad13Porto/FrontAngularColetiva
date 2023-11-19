import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatilhoComponent } from './gatilho.component';

describe('GatilhoComponent', () => {
  let component: GatilhoComponent;
  let fixture: ComponentFixture<GatilhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GatilhoComponent]
    });
    fixture = TestBed.createComponent(GatilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
