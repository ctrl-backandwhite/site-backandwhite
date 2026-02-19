// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  defaultauth: 'fakebackend',

  // OAuth2 Configuration
  apiBaseUrl: 'https://localhost:8443/api/v1',
  oauth2AuthorizeUrl: 'https://localhost:8443/oauth2/authorize',
  oauth2TokenUrl: 'https://localhost:8443/oauth2/token',
  clientId: 'oidc-client',
  redirectUri: 'http://localhost:4200/auth/callback',
  scope: 'openid',
  responseType: 'code',
  responseMode: 'query',
  code_challenge_method: 'S256',

  firebaseConfig: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
