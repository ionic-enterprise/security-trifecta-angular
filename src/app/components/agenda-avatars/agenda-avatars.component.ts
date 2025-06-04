import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonAvatar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-agenda-avatars',
  templateUrl: './agenda-avatars.component.html',
  styleUrls: ['./agenda-avatars.component.scss'],
  imports: [IonAvatar, NgStyle],
})
export class AgendaAvatarsComponent {
  @Input() urls: string[] = [];
  @Input() size = '100%';
}
