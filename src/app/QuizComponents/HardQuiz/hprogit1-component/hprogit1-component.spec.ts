import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HProgit1Component } from './hprogit1-component';

describe('HProgit1Component', () => {
  let component: HProgit1Component;
  let fixture: ComponentFixture<HProgit1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HProgit1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(HProgit1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
