import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { ToastController } from '@ionic/angular';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonNote,
  IonText,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AgendaAvatarsComponent } from 'src/app/components/agenda-avatars/agenda-avatars.component';
import { TalkReminderService } from 'src/app/services/talk-reminder.service';
import { AgendaService } from '../../../services/agenda.service';
import { CompanyService } from '../../../services/company.service';
import { SpeakerService } from '../../../services/speaker.service';
import { AgendaItem, Speaker } from '../../../types';

@Component({
  selector: 'app-agenda-item',
  templateUrl: './agenda-item.page.html',
  styleUrls: ['./agenda-item.page.scss'],
  imports: [
    AgendaAvatarsComponent,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonNote,
    IonText,
    IonToolbar,
  ],
})
export class AgendaItemPage implements OnInit {
  public agendaItem: AgendaItem;
  public speakers: Speaker[];
  public photoUrls: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private speakerService: SpeakerService,
    private agendaService: AgendaService,
    private companyService: CompanyService,
    private talkReminderService: TalkReminderService,
    private toastController: ToastController,
  ) {}

  async ngOnInit() {
    const agendaId = this.route.snapshot.paramMap.get('agendaId');
    this.agendaItem = await this.agendaService.getAgendaItem(parseInt(agendaId, 10));
    this.speakers = await this.speakerService.getSpeakers(this.agendaItem.speakerIds);
    this.photoUrls = this.speakers.map((speaker) => speaker.photoUrl);
  }

  async setReminder(agendaItem: AgendaItem) {
    await this.talkReminderService.scheduleReminder(agendaItem);

    // set reminder for 5 minutes before!
    const toast = await this.toastController.create({
      message: 'Reminder set for 5 minutes before the talk begins',
      duration: 2000,
      color: 'primary',
    });

    await toast.present();
  }

  async triggerBrowser() {
    await Browser.open({ url: 'https://ionic.io/events/enterprise-app-summit-21' });
  }

  formatTalkTime(agendaItem: AgendaItem) {
    return this.agendaService.formatTalkTime(agendaItem);
  }

  getCompanyName(companyId: number) {
    return this.companyService.getCompany(companyId).name;
  }
}
