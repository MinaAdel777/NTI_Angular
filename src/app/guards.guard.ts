import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthoService } from './services/autho.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthoService);
  const router = inject(Router);
  if (auth.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

