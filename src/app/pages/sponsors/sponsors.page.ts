import { Component, OnInit } from '@angular/core';
import { Sponsor, SponsorTier } from '../../types';
import { SponsorService } from '../../services/sponsor.service';
import { NgFor } from '@angular/common';
import { IonContent, IonHeader, IonListHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { SponsorCardComponent } from 'src/app/components/sponsor-card/sponsor-card.component';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.page.html',
  styleUrls: ['./sponsors.page.scss'],
  imports: [IonContent, IonHeader, IonListHeader, IonTitle, IonToolbar, NgFor, SponsorCardComponent],
})
export class SponsorsPage implements OnInit {
  public platinumSponsors: Sponsor[] = [];
  public goldSponsors: Sponsor[] = [];
  public silverSponsors: Sponsor[] = [];
  public bronzeSponsors: Sponsor[] = [];

  constructor(private sponsorService: SponsorService) {}

  async ngOnInit() {
    const sponsors = await this.sponsorService.getSponsors();
    sponsors.forEach((sponsor) => {
      switch (sponsor.tier) {
        case SponsorTier.Platinum:
          this.platinumSponsors = [...this.platinumSponsors, sponsor];
          break;
        case SponsorTier.Gold:
          this.goldSponsors = [...this.goldSponsors, sponsor];
          break;
        case SponsorTier.Silver:
          this.silverSponsors = [...this.silverSponsors, sponsor];
          break;
        case SponsorTier.Bronze:
          this.bronzeSponsors = [...this.bronzeSponsors, sponsor];
          break;
        default:
          break;
      }
    });
  }
}
