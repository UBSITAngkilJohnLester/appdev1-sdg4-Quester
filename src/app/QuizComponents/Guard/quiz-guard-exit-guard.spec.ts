import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { quizGuardExitGuard } from './quiz-guard-exit-guard';

describe('quizGuardExitGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => quizGuardExitGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
