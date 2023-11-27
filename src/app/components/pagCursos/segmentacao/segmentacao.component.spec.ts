import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentacaoComponent } from './segmentacao.component';

describe('SegmentacaoComponent', () => {
  let component: SegmentacaoComponent;
  let fixture: ComponentFixture<SegmentacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SegmentacaoComponent]
    });
    fixture = TestBed.createComponent(SegmentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
