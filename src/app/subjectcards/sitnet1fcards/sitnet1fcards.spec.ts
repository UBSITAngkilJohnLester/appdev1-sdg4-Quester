import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SITNET1fcards } from './sitnet1fcards';

describe('SITNET1fcards', () => {
  let component: SITNET1fcards;
  let fixture: ComponentFixture<SITNET1fcards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SITNET1fcards],
    }).compileComponents();

    fixture = TestBed.createComponent(SITNET1fcards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
