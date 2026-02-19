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

    buildAuthorizationUrl(codeChallenge: string): string {
        const state = this.generateRandomString(32);
        const nonce = this.generateRandomString(32);

        // Guardar state y nonce para validación posterior
        localStorage.setItem('oauth_state', state);
        localStorage.setItem('oauth_nonce', nonce);

        const params = new URLSearchParams({
            client_id: this.clientId,
            redirect_uri: this.redirectUri,
            response_type: this.responseType,
            response_mode: this.responseMode,
            scope: this.scope,
            code_challenge: codeChallenge,
            code_challenge_method: this.codeChallengeMethod,
            state: state,
            nonce: nonce,
        });

        return `${this.oauth2AuthorizeUrl}?${params.toString()}`;
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

    private generateRandomString(length: number): string {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return result;
    }
}
