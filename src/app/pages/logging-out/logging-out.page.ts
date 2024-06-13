import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-logging-out',
  templateUrl: './logging-out.page.html',
  styleUrls: ['./logging-out.page.scss'],
})
export class LoggingOutPage implements OnInit {

  constructor(private routeService: RouteService, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    try {
      console.log('logging out > login')
      this.routeService.returnToLogin();
    } catch (error) {
      console.error(error);
    }
  }
}
