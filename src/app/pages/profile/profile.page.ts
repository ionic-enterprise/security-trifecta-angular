import { Component, inject } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonListHeader,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  ModalController,
  ToastController,
} from '@ionic/angular/standalone';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { VaultService } from 'src/app/services/vault.service';
import { SwagModalPage } from '../../components/swag-modal/swag-modal.page';

@Component({
  selector: 'app-swag',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonListHeader,
    IonHeader,
    IonTitle,
    IonToolbar,
  ],
})
export class ProfilePage {
  modalController = inject(ModalController);
  private authService = inject(AuthenticationService);
  private vaultService = inject(VaultService);
  private routerOutlet = inject(IonRouterOutlet);
  toastController = inject(ToastController);

  public name: string;
  public id: string;

  async ionViewDidEnter() {
    const token = await this.authService.getAccessToken();
    console.log('access token', token);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = await this.authService.decodeToken();
    const isExpired = Date.now() >= data.exp * 1000;
    console.log(`Expired ${isExpired}`);
    this.name = `${data.given_name} ${data.family_name}`;
    this.id = data.sub;
    console.log(data);
  }

  async openSwagModal() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: SwagModalPage,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {},
    });

    modal.onDidDismiss().then((result) => {
      // Data will be undefined if modal was swiped closed or back button used
      if (result.data) {
        this.presentToast();
      }
    });

    return await modal.present();
  }

  public async signOut() {
    await this.vaultService.clear();

    // Note: Logout will cause the app to reload so we cannot await logout!
    this.authService.logout();
  }

  private async presentToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Thanks! Winners will be notified by email.',
      duration: 2000,
      color: 'primary',
    });

    await toast.present();
  }
}
