import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubjectHeaderComponent } from './subject-header';

describe('SubjectHeaderComponent', () => {
  let component: SubjectHeaderComponent;
  let fixture: ComponentFixture<SubjectHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title and description', () => {
    component.title = 'Networking';
    component.description = 'Learn how devices communicate.';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Networking');
    expect(compiled.textContent).toContain('Learn how devices communicate.');
  });

  it('should emit backClicked when onBack is called', () => {
    let emitted = false;
    component.backClicked.subscribe(() => (emitted = true));
    component.onBack();
    expect(emitted).toBe(true);
  });
});