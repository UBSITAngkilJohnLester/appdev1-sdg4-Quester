import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sitnet1Info } from './sitnet1-info';

describe('Sitnet1Info', () => {
  let component: Sitnet1Info;
  let fixture: ComponentFixture<Sitnet1Info>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sitnet1Info],
    }).compileComponents();

    fixture = TestBed.createComponent(Sitnet1Info);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
