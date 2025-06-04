import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonLabel,
  IonText,
  ModalController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeCircle, logoGithub, logoLinkedin, logoTwitter } from 'ionicons/icons';
import { SpeakerService } from '../../services/speaker.service';
import { Speaker } from '../../types';
import { SpeakerCardComponent } from '../speaker-card/speaker-card.component';

@Component({
  selector: 'app-speaker-view',
  templateUrl: './speaker-view.component.html',
  styleUrls: ['./speaker-view.component.scss'],
  imports: [IonButton, IonButtons, IonContent, IonIcon, IonLabel, IonText, NgIf, SpeakerCardComponent],
})
export class SpeakerViewComponent implements OnInit {
  @Input() id: number;

  public speaker: Speaker;

  constructor(
    private speakerService: SpeakerService,
    private modalController: ModalController,
  ) {
    addIcons({ closeCircle, logoGithub, logoLinkedin, logoTwitter });
  }

  ngOnInit() {
    this.speaker = this.speakerService.getSpeaker(this.id);
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async openLink(link: string) {
    await Browser.open({ url: link });
  }
}
