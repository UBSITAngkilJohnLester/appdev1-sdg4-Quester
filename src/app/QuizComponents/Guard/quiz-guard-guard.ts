import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const quizGuardGuard: CanActivateFn = (route, state) => {
 
  const router = inject(Router);
  const progress = JSON.parse(localStorage.getItem('quizProgress') || '{}');

  const required = route.data['required'];
  const redirect = route.data['redirect'];

  if (required && !progress[required]) {
    router.navigate([redirect]);
    return false;
  }

  return true;
};
