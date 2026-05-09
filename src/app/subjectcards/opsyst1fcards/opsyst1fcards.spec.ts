import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPSYST1fcards } from './opsyst1fcards';

describe('OPSYST1fcards', () => {
  let component: OPSYST1fcards;
  let fixture: ComponentFixture<OPSYST1fcards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OPSYST1fcards],
    }).compileComponents();

    fixture = TestBed.createComponent(OPSYST1fcards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
