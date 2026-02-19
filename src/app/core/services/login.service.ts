import { Injectable, inject } from '@angular/core';
import { PKCEService } from '../auth/services/pkce.service';
import { OAuth2ConfigService } from '../auth/services/oauth2-config.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private readonly pkceService = inject(PKCEService);
    private readonly oauth2ConfigService = inject(OAuth2ConfigService);

    async initiateLogin(): Promise<void> {
        try {
            const { codeChallenge } = await this.pkceService.generateChallengeAsync();
            const authUrl = this.oauth2ConfigService.buildAuthorizationUrl(codeChallenge);
            window.location.href = authUrl;
        } catch (error) {
            console.error('Error initiating login:', error);
        }
    }
}
