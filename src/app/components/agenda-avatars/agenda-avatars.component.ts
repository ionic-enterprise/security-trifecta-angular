import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agenda-avatars',
  templateUrl: './agenda-avatars.component.html',
  styleUrls: ['./agenda-avatars.component.scss'],
})
export class AgendaAvatarsComponent {
  @Input() urls: string[] = [];
  @Input() size = '100%';
}
