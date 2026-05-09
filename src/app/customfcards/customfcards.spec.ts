import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customfcards } from './customfcards';

describe('Customfcards', () => {
  let component: Customfcards;
  let fixture: ComponentFixture<Customfcards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customfcards],
    }).compileComponents();

    fixture = TestBed.createComponent(Customfcards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
