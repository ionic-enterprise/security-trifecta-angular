// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { ProviderOptions } from '@ionic-enterprise/auth';

export const environment = {
  production: false,
  baseUrl: 'https://ionic-app-summit.netlify.app'
};

export const nativeIonicAuthOptions: ProviderOptions = {
  audience: 'https://audience.my-app.com',

  // client or application id for provider
  clientId: '64p9c53l5thd5dikra675suvq9',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_YU8VQe29z/.well-known/openid-configuration',
  // the URI to redirect to after log in
  redirectUri: 'https://trifecta.nexusconcepts.com/login',
  // requested scopes from provider
  scope: 'openid email profile',
  // the URL to redirect to after log out
  logoutUrl: 'https://trifecta.nexusconcepts.com/login',
};

export const webIonicAuthOptions: ProviderOptions = {
  audience: 'https://audience.my-app.com',

  // client or application id for provider
  clientId: '64p9c53l5thd5dikra675suvq9',
  // the discovery url for the provider
  // OpenID configuration
  discoveryUrl: 'https://cognito-idp.us-east-2.amazonaws.com/us-east-2_YU8VQe29z/.well-known/openid-configuration',
  // the URI to redirect to after log in
  redirectUri: 'http://localhost:8100/auth-action-complete',
  // requested scopes from provider
  scope: 'openid email profile',
  // the URL to redirect to after log out
  logoutUrl: 'http://localhost:8100/auth-transition#logout'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
