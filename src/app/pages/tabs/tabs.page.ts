import { Component } from '@angular/core';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendar, people, person, star } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs],
})
export class TabsPage {
  constructor() {
    addIcons({ calendar, people, person, star });
  }
}
