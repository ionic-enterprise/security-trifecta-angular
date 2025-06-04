import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { RouteService } from './route.service';
import { VaultService } from './vault.service';

export const authGuard: CanActivateFn = async (): Promise<boolean> => {
  const authService = inject(AuthenticationService);
  const routeService = inject(RouteService);
  const vaultService = inject(VaultService);

  if (await authService.isAuthenticated()) {
    return true;
  }

  vaultService.clear();
  routeService.returnToLogin();
  return false;
};
