import { Component, Input, OnInit } from '@angular/core';
import { IonButton, IonButtons, IonContent, IonIcon, IonText, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeCircle } from 'ionicons/icons';
import { SponsorService } from '../../services/sponsor.service';
import { Sponsor } from '../../types';
import { SponsorCardComponent } from '../sponsor-card/sponsor-card.component';

@Component({
  selector: 'app-sponsor-view',
  templateUrl: './sponsor-view.component.html',
  styleUrls: ['./sponsor-view.component.scss'],
  imports: [IonButton, IonButtons, IonContent, IonIcon, IonText, SponsorCardComponent],
})
export class SponsorViewComponent implements OnInit {
  @Input() id: number;

  public sponsor: Sponsor;

  constructor(
    private sponsorService: SponsorService,
    private modalController: ModalController,
  ) {
    addIcons({ closeCircle });
  }

  async ngOnInit() {
    this.sponsor = await this.sponsorService.getSponsor(this.id);
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
