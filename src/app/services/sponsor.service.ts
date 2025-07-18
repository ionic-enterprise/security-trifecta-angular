import { Injectable, inject } from '@angular/core';
import { Sponsor } from '../types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class SponsorService {
  private apiService = inject(ApiService);

  private sponsors: Sponsor[];

  async getSponsors(): Promise<Sponsor[]> {
    await this.init();
    return this.sponsors;
  }

  async getSponsor(id: number): Promise<Sponsor | undefined> {
    await this.init();
    return this.sponsors.find((sponsor) => sponsor.id === id);
  }

  private async init(): Promise<void> {
    if (this.sponsors) return;
    this.sponsors = await this.apiService.getSponsors();
  }
}
