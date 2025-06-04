import { enableProdMode, inject, provideAppInitializer } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { KeyValueStorage } from '@ionic-enterprise/secure-storage/ngx';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { AuthGuardService } from './app/services/auth-guard.service';
import { KeyService } from './app/services/key.service';
import { VaultService } from './app/services/vault.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const appInitFactory =
  (vaultService: VaultService, keyService: KeyService): (() => Promise<void>) =>
  async () => {
    await vaultService.init();
    keyService.init();
  };

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideAppInitializer(() => {
      const initializerFn = appInitFactory(inject(VaultService), inject(KeyService));
      return initializerFn();
    }),
    AuthGuardService,
    KeyValueStorage,
    provideIonicAngular({}),
    provideRouter(routes),
  ],
});
