import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCardsComponents } from './fcards-components';

describe('FCardsComponents', () => {
  let component: FCardsComponents;
  let fixture: ComponentFixture<FCardsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FCardsComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FCardsComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
