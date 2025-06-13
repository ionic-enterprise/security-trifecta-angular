import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { HubspotService } from '../../services/hubspot.service';
import { HubspotFormData } from '../../types';

@Component({
  selector: 'app-swag-modal',
  templateUrl: './swag-modal.page.html',
  styleUrls: ['./swag-modal.page.scss'],
  imports: [
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonSelect,
    IonSelectOption,
    IonText,
    IonTitle,
    IonToolbar,
    FormsModule,
  ],
})
export class SwagModalPage {
  private hubspotService = inject(HubspotService);
  private modalController = inject(ModalController);

  @ViewChild('hubspotForm') hubspotForm: NgForm;

  public hubspotData: HubspotFormData = new HubspotFormData();
  public states: string[] = [];

  constructor() {
    const hubspotService = this.hubspotService;

    this.states = hubspotService.getStates();
  }

  submitForm() {
    this.hubspotForm.onSubmit(undefined);
  }

  public async onSubmit() {
    if (!this.hubspotForm.valid) {
      return;
    }

    const success = await this.hubspotService.submitToHubspot(this.hubspotData);

    if (success) {
      await this.modalController.dismiss(success);
    }
  }

  async closeModal() {
    await this.modalController.dismiss(null);
  }
}
