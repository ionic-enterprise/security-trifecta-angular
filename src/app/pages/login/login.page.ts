import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonImg, IonSpinner, IonText } from '@ionic/angular/standalone';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { VaultService } from 'src/app/services/vault.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonButton, IonContent, IonHeader, IonImg, IonSpinner, IonText, NgClass],
})
export class LoginPage {
  private authenticationService = inject(AuthenticationService);
  private vaultService = inject(VaultService);

  public busy = false;
  public showLogo = false;
  public isDark = !window.matchMedia('(prefers-color-scheme: dark)').matches;

  async signIn() {
    try {
      this.busy = true;
      await this.authenticationService.login();
      setTimeout(() => {
        // Timeout is used here because we may have logged in and are routing to the home page
        this.busy = false;
      }, 1000);
    } catch (error) {
      this.busy = false;
      console.error('signIn', error);
    }
  }

  async signOut() {
    try {
      this.busy = true;
      await this.authenticationService.logout();
    } catch (err) {
      console.error(err);
    } finally {
      this.busy = false;
    }
  }
}
