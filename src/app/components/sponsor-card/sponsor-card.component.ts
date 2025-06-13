import { NgClass } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { IonCard } from '@ionic/angular/standalone';
import { SponsorService } from '../../services/sponsor.service';
import { Sponsor } from '../../types';

@Component({
  selector: 'app-sponsor-card',
  templateUrl: './sponsor-card.component.html',
  styleUrls: ['./sponsor-card.component.scss'],
  imports: [IonCard, NgClass],
})
export class SponsorCardComponent implements OnInit {
  private sponsorService = inject(SponsorService);

  @Input() id: number;
  @Input() button = false;

  public sponsor: Sponsor;

  async ngOnInit() {
    this.sponsor = await this.sponsorService.getSponsor(this.id);
  }

  async openLink(link: string) {
    await Browser.open({ url: link });
  }
}
