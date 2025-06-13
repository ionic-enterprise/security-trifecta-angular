import { NgClass } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { CompanyService } from '../../services/company.service';
import { SpeakerService } from '../../services/speaker.service';
import { Company, Speaker } from '../../types';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, NgClass],
})
export class SpeakerCardComponent implements OnInit {
  private speakerService = inject(SpeakerService);
  private companyService = inject(CompanyService);

  @Input() id: number;
  @Input() button = false;
  @Input() safeArea = false;

  public speaker: Speaker;
  public company: Company;

  ngOnInit() {
    this.speaker = this.speakerService.getSpeaker(this.id);
    this.company = this.companyService.getCompany(this.speaker.companyId);
  }
}
