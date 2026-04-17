import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOpsyst1Component } from './mopsyst1-component';

describe('MOpsyst1Component', () => {
  let component: MOpsyst1Component;
  let fixture: ComponentFixture<MOpsyst1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MOpsyst1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(MOpsyst1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
