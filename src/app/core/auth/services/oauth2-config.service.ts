import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OAuth2ConfigService {
  private readonly clientId = environment.clientId;
  private readonly redirectUri = environment.redirectUri;
  private readonly scope = environment.scope;
  private readonly oauth2AuthorizeUrl = environment.oauth2AuthorizeUrl;
  private readonly responseType = environment.responseType;
  private readonly responseMode = environment.responseMode;
  private readonly codeChallengeMethod = environment.code_challenge_method;
  private readonly state = environment.state;
  private readonly nonce = environment.nonce;

  buildAuthorizationUrl(codeChallenge: string): string {
    const params = new URLSearchParams({
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      response_type: this.responseType,
      response_mode: this.responseMode,
      scope: this.scope,
      code_challenge: codeChallenge,
      code_challenge_method: this.codeChallengeMethod,
      state: this.state,
      nonce: this.nonce,
    });

    return `${this.oauth2AuthorizeUrl}${params.toString()}`;
  }

  getClientId(): string {
    return this.clientId;
  }

  getRedirectUri(): string {
    return this.redirectUri;
  }

  getScope(): string {
    return this.scope;
  }
}
