import { CanDeactivateFn } from '@angular/router';

export const confirmLeaveGuard: CanDeactivateFn<any> = (component) => {

  if (component.mode === 'quiz') {
    return confirm('Are you sure you want to leave? Your progress will be lost.');
  }

  return true;
};