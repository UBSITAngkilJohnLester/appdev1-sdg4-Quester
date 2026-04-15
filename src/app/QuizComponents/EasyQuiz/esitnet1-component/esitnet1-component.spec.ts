import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESitnet1Component } from './esitnet1-component';

describe('ESitnet1Component', () => {
  let component: ESitnet1Component;
  let fixture: ComponentFixture<ESitnet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ESitnet1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(ESitnet1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
