import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EProgit1Component } from './eprogit1-component';

describe('EProgit1Component', () => {
  let component: EProgit1Component;
  let fixture: ComponentFixture<EProgit1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EProgit1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(EProgit1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
