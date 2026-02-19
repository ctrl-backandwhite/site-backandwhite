import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PKCEService } from '../services/pkce.service';
import { OAuth2ConfigService } from '../services/oauth2-config.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {
    private readonly authService = inject(AuthService);
    private readonly pkceService = inject(PKCEService);
    private readonly oauth2ConfigService = inject(OAuth2ConfigService);
    private readonly router = inject(Router);

    async canActivate(): Promise<boolean> {
        const isAuth = this.authService.isAuthenticated();
        console.log('[AuthGuard] canActivate - isAuthenticated:', isAuth);
        console.log('[AuthGuard] Access Token:', this.authService.getAccessToken()?.substring(0, 50));

        if (isAuth) {
            return true;
        }

        console.log('[AuthGuard] Not authenticated, redirecting to login');
        // Redirect to OAuth2 authorization
        await this.redirectToLogin();
        return false;
    }

    private async redirectToLogin(): Promise<void> {
        try {
            const { codeChallenge } = await this.pkceService.generateChallengeAsync();
            const authUrl = this.oauth2ConfigService.buildAuthorizationUrl(codeChallenge);
            window.location.href = authUrl;
        } catch (error) {
            console.error('Error redirecting to login:', error);
            this.router.navigate(['/']);
        }
    }
}
