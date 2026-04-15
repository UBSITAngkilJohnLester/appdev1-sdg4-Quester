import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSitnet1Component } from './hsitnet1-component';

describe('HSitnet1Component', () => {
  let component: HSitnet1Component;
  let fixture: ComponentFixture<HSitnet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HSitnet1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(HSitnet1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
