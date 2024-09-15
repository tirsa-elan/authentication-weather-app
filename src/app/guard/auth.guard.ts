
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthdGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (!localStorage.getItem('token')) {
    router.navigate(['/login']);
    return false
  }
  else {
    return true
  }
};
