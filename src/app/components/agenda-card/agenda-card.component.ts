import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { AgendaService } from '../../services/agenda.service';
import { CompanyService } from '../../services/company.service';
import { SpeakerService } from '../../services/speaker.service';
import { AgendaItem, Speaker } from '../../types';
import { AgendaAvatarsComponent } from '../agenda-avatars/agenda-avatars.component';

@Component({
  selector: 'app-agenda-card',
  templateUrl: './agenda-card.component.html',
  styleUrls: ['./agenda-card.component.scss'],
  imports: [AgendaAvatarsComponent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})
export class AgendaCardComponent implements OnInit {
  private agendaService = inject(AgendaService);
  private speakerService = inject(SpeakerService);
  private companyService = inject(CompanyService);
  private router = inject(Router);

  @Input() id: number;

  public agenda: AgendaItem;
  public speakers: Speaker[];
  public photoUrls: string[] = [];

  async ngOnInit() {
    this.agenda = await this.agendaService.getAgendaItem(this.id);
    this.speakers = await this.speakerService.getSpeakers(this.agenda.speakerIds);
    this.photoUrls = this.speakers.map((speaker) => speaker.photoUrl);
  }

  navigateToAgendaItemPage() {
    this.router.navigate([`/agenda/${this.id}`]);
  }

  getCompanyName(companyId: number) {
    return this.companyService.getCompany(companyId).name;
  }

  formatTalkTime(agendaItem: AgendaItem) {
    return this.agendaService.formatTalkTime(agendaItem);
  }
}
