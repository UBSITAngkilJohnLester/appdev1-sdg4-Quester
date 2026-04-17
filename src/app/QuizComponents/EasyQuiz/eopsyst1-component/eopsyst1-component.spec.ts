import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EOpsyst1Component } from './eopsyst1-component';

describe('EOpsyst1Component', () => {
  let component: EOpsyst1Component;
  let fixture: ComponentFixture<EOpsyst1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EOpsyst1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(EOpsyst1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
