export const environment = {
  production: true,
  defaultauth: 'fakebackend',
  
  // OAuth2 Configuration
  apiBaseUrl: 'https://localhost:8443/api/v1',
  oauth2AuthorizeUrl: 'https://localhost:8443/oauth2/authorize',
  oauth2TokenUrl: 'https://localhost:8443/oauth2/token',
  clientId: 'backandwhite-client',
  redirectUri: 'https://backandwhite.com/auth/callback',
  scope: 'openid',
  responseType: 'code',
  responseMode: 'query',
  code_challenge_method: 'S256',
  
  firebaseConfig: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: ''
  }
};
