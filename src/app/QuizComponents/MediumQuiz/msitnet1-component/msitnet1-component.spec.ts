import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSitnet1Component } from './msitnet1-component';

describe('MSitnet1Component', () => {
  let component: MSitnet1Component;
  let fixture: ComponentFixture<MSitnet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MSitnet1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(MSitnet1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
