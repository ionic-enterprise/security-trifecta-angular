import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PushNotificationService } from 'src/app/services/push-notification.service';

@Component({
  selector: 'app-permissions-modal',
  templateUrl: './permissions-modal.component.html',
  styleUrls: ['./permissions-modal.component.scss'],
  standalone: false,
})
export class PermissionsModalComponent {
  constructor(
    private modalController: ModalController,
    private pushService: PushNotificationService,
  ) {}

  async onContinue() {
    await this.pushService.promptPushRegistration();
    this.closeModal();
  }

  async closeModal() {
    await this.modalController.dismiss(null);
  }
}
