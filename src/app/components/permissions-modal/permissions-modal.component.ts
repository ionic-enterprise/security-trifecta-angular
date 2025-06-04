import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonText,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeCircle } from 'ionicons/icons';
import { PushNotificationService } from 'src/app/services/push-notification.service';

@Component({
  selector: 'app-permissions-modal',
  templateUrl: './permissions-modal.component.html',
  styleUrls: ['./permissions-modal.component.scss'],
  imports: [IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonText, IonToolbar],
})
export class PermissionsModalComponent {
  constructor(
    private modalController: ModalController,
    private pushService: PushNotificationService,
  ) {
    addIcons({ closeCircle });
  }

  async onContinue() {
    await this.pushService.promptPushRegistration();
    this.closeModal();
  }

  async closeModal() {
    await this.modalController.dismiss(null);
  }
}
