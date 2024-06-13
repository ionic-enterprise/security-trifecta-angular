import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoggingOutPageRoutingModule } from './logging-out-routing.module';

import { LoggingOutPage } from './logging-out.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoggingOutPageRoutingModule
  ],
  declarations: [LoggingOutPage]
})
export class LoggingOutPageModule { }
