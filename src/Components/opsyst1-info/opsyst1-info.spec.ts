import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opsyst1Info } from './opsyst1-info';

describe('Opsyst1Info', () => {
  let component: Opsyst1Info;
  let fixture: ComponentFixture<Opsyst1Info>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opsyst1Info],
    }).compileComponents();

    fixture = TestBed.createComponent(Opsyst1Info);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
