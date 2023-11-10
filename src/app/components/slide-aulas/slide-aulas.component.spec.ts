import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideAulasComponent } from './slide-aulas.component';

describe('SlideAulasComponent', () => {
  let component: SlideAulasComponent;
  let fixture: ComponentFixture<SlideAulasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideAulasComponent]
    });
    fixture = TestBed.createComponent(SlideAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
