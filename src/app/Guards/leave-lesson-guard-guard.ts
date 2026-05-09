import { CanDeactivateFn } from '@angular/router';

export interface CanLeave {
  canLeave: () => boolean;
}

export const leaveLessonGuard: CanDeactivateFn<CanLeave> = (component) => {
  if (component.canLeave && !component.canLeave()) {
    return confirm('Leave this lesson? Your progress will not be saved.');
  }
  return true;
};