import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HOpsyst1Component } from './hopsyst1-component';

describe('HOpsyst1Component', () => {
  let component: HOpsyst1Component;
  let fixture: ComponentFixture<HOpsyst1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HOpsyst1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(HOpsyst1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
