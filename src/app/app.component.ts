import { Component, NgZone, inject } from '@angular/core';
import { Router } from '@angular/router';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AuthenticationService } from './services/authentication.service';
import { VaultService } from './services/vault.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private auth = inject(AuthenticationService);
  private router = inject(Router);
  private vaultService = inject(VaultService);
  private platform = inject(Platform);
  private ngZone = inject(NgZone);

  constructor() {
    this.initializeApp();
    this.platform.resume.subscribe(() => {
      console.log('PlatformResult.checkAuth', this.router.url);
      setTimeout(() => {
        this.checkAuth();
      }, 300); // This gives time for the vault to be locked because the vault uses lockAfterBackgrounded feature
    });
  }

  async initializeApp() {
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      console.log(`appUrlOpen ${event}`);
    });
    if (Capacitor.isNativePlatform()) {
      await StatusBar.hide();
      await SplashScreen.hide();
    }
  }

  private routeToLogin() {
    this.ngZone.run(() => {
      this.router.navigate(['login']);
    });
  }

  private async checkAuth() {
    if (window.location.hash.length > 0) {
      // When Auth Connect returns to the app it will load the app again
      // We want it to load without checking authentication so that it can
      // capture the token when auth-transition is routed to.
      console.log('checkAuth().window.location.hash.length', window.location.hash.length);
      return;
    }
    try {
      // This will trigger a check of the vault and ensure we are authenticated
      if (!(await this.auth.isAuthenticated())) {
        this.routeToLogin();
      }
    } catch (error) {
      if (error?.message?.includes('Not authenticated')) {
        this.auth.logout();
      } else {
        // Any failure we'll clear the vault and route to login
        await this.vaultService.clear();
        this.routeToLogin();
      }
    }
  }
}
