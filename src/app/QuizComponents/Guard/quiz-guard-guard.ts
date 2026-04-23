import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const quizGuardGuard: CanActivateFn = (route, state) => {
 
  const router = inject(Router);
  const progress = JSON.parse(localStorage.getItem('quizProgress') || '{}');

  const url = state.url;

  //Kicks users back to previous dif if not completed//
  //progit
  if (url.includes('ProgitM') && !progress.progitEasyDone) {
    router.navigate(['/ProgitE']);
    return false;
  }

  if (url.includes('ProgitH') && !progress.progitMediumDone) {
    router.navigate(['/ProgitM']);
    return false;
  }

  //opsyst
  if (url.includes('OpsystM') && !progress.opsystEasyDone) {
    router.navigate(['/OpsystE']);
    return false;
  }

  if (url.includes('OpsystH') && !progress.opsystMediumDone) {
    router.navigate(['/OpsystM']);
    return false;
  }

  //sitnet
  if (url.includes('SitnetM') && !progress.sitnetEasyDone) {
    router.navigate(['/SitnetE']);
    return false;
  }

  if (url.includes('SitnetH') && !progress.sitnetMediumDone) {
    router.navigate(['/SitnetM']);
    return false;
  }

  return true;
};
