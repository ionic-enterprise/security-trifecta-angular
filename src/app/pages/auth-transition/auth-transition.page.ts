import { Component, inject } from '@angular/core';
import { IonContent, IonSpinner } from '@ionic/angular/standalone';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-auth-transition',
  templateUrl: './auth-transition.page.html',
  styleUrls: ['./auth-transition.page.scss'],
  imports: [IonContent, IonSpinner],
})
export class AuthTransitionPage {
  private routeService = inject(RouteService);
  private auth = inject(AuthenticationService);

  async ionViewDidEnter() {
    try {
      // Transitioning to logout or login
      if (window.location.hash === '#logout') {
        this.routeService.returnToLogin();
      } else {
        await this.auth.handleLogin();
      }
    } catch (error) {
      console.error(error);
    }
  }
}
