import { Injectable, inject } from '@angular/core';
import { Speaker } from '../types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class SpeakerService {
  private apiService = inject(ApiService);

  private speakers: Speaker[];

  public async getSpeakers(ids?: number[]): Promise<Speaker[]> {
    if (!this.speakers) {
      this.speakers = await this.apiService.getSpeakers();
    }
    if (ids === undefined) {
      return this.speakers;
    }

    return this.speakers.filter((speaker) => ids.includes(speaker.id));
  }

  public getSpeaker(id: number): Speaker | undefined {
    return this.speakers.find((speaker) => speaker.id === id);
  }
}
