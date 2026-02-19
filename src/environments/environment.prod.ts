export const environment = {
  production: true,
  defaultauth: 'fakebackend',
  
  // OAuth2 Configuration
  apiBaseUrl: 'https://localhost:8443/api/v1',
  oauth2AuthorizeUrl: 'https://localhost:8443/oauth2/authorize?',
  oauth2LoginUrl: 'https://localhost:8443/login',
  clientId: 'backandwhite-client',
  redirectUri: 'https://backandwhite.com/admin',
  scope: 'openid',
  responseType: 'code',
  responseMode: 'query',
  code_challenge_method: 'S256',
  state: 'bw_state_12345',
  nonce: 'bw_nonce_67890',
  
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
