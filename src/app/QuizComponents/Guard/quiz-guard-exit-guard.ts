import { CanDeactivateFn } from '@angular/router';

export const confirmLeaveGuard: CanDeactivateFn<any> = (component) => {

  //pops up if user tries to leave the quiz. 
  if (component.mode === 'quiz') {
    return confirm('Are you sure you want to leave? Your progress will be lost.');
  }

  return true;
};