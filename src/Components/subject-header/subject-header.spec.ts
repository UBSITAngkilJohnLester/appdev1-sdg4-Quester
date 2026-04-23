import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectHeader } from './subject-header';

describe('SubjectHeader', () => {
  let component: SubjectHeader;
  let fixture: ComponentFixture<SubjectHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
