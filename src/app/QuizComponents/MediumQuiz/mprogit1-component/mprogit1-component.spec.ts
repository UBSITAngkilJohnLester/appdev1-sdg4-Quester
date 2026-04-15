import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MProgit1Component } from './mprogit1-component';

describe('MProgit1Component', () => {
  let component: MProgit1Component;
  let fixture: ComponentFixture<MProgit1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MProgit1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(MProgit1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
