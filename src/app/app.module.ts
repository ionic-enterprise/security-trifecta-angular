import { NgModule, inject, provideAppInitializer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { KeyValueStorage } from '@ionic-enterprise/secure-storage/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './services/auth-guard.service';
import { VaultService } from './services/vault.service';
import { KeyService } from './services/key.service';

const appInitFactory =
  (vaultService: VaultService, keyService: KeyService): (() => Promise<void>) =>
  async () => {
    await vaultService.init();
    keyService.init();
  };

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideAppInitializer(() => {
      const initializerFn = appInitFactory(inject(VaultService), inject(KeyService));
      return initializerFn();
    }),
    AuthGuardService,
    KeyValueStorage,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
