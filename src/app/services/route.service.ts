import { Injectable, NgZone, inject } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private navController = inject(NavController);
  private ngZone = inject(NgZone);

  public returnToLogin() {
    this.ngZone.run(() => {
      this.navController.navigateRoot('login', { animated: false });
    });
  }

  public goToRoot() {
    this.ngZone.run(() => {
      // I've chosen to navigate to the root of the app without animation
      // as the login window already animated out
      this.navController.navigateRoot('/', { animated: false });
    });
  }
}
