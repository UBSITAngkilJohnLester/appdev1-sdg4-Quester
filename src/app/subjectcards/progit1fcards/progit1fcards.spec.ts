import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PROGIT1fcards } from './progit1fcards';

describe('PROGIT1fcards', () => {
  let component: PROGIT1fcards;
  let fixture: ComponentFixture<PROGIT1fcards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PROGIT1fcards],
    }).compileComponents();

    fixture = TestBed.createComponent(PROGIT1fcards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
