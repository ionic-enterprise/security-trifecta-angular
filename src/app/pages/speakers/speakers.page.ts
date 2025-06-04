import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, ModalController } from '@ionic/angular/standalone';
import { SpeakerCardComponent } from 'src/app/components/speaker-card/speaker-card.component';
import { SpeakerService } from '../../services/speaker.service';
import { Speaker } from '../../types';
import { SpeakerViewComponent } from 'src/app/components/speaker-view/speaker-view.component';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, SpeakerCardComponent],
})
export class SpeakersPage implements OnInit {
  public speakers: Speaker[] = [];

  constructor(
    private modalController: ModalController,
    private speakerService: SpeakerService,
  ) {}

  async ngOnInit() {
    this.speakers = await this.speakerService.getSpeakers();
  }

  trackItems(index: number, itemObject: Speaker) {
    return itemObject.id;
  }

  speakerClicked() {
    console.log('speaker clicked');
  }

  async presentModal(id: number) {
    const modal = await this.modalController.create({
      component: SpeakerViewComponent,
      componentProps: {
        id,
      },
    });

    modal.present();
  }
}
