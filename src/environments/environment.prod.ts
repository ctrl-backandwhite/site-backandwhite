export const environment = {
  production: true,
  defaultauth: 'fakebackend',

  // OAuth2 Configuration
  apiBaseUrl: 'https://mic-authservice-production.up.railway.app/api/v1',
  oauth2AuthorizeUrl: 'https://mic-authservice-production.up.railway.app/oauth2/authorize',
  oauth2TokenUrl: 'https://mic-authservice-production.up.railway.app/oauth2/token',
  oauth2LoginUrl: 'https://mic-authservice-production.up.railway.app/login',
  clientId: 'backandwhite-client',
  redirectUri: 'https://backandwhite.com/auth/callback',
  scope: 'openid',
  responseType: 'code',
  responseMode: 'query',
  code_challenge_method: 'S256'
};
