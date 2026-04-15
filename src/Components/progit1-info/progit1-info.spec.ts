import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Progit1Info } from './progit1-info';

describe('Progit1Info', () => {
  let component: Progit1Info;
  let fixture: ComponentFixture<Progit1Info>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Progit1Info],
    }).compileComponents();

    fixture = TestBed.createComponent(Progit1Info);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
