import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { TokenService } from './token.service';
import { AuthStateService } from './auth-state.service';
import { PKCEService } from './pkce.service';
import { firstValueFrom } from 'rxjs';

export interface TokenResponse {
  access_token: string;
  refresh_token?: string;
  token_type: string;
  expires_in: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly tokenService = inject(TokenService);
  private readonly authStateService = inject(AuthStateService);
  private readonly pkceService = inject(PKCEService);

  private readonly tokenEndpoint = environment.apiBaseUrl.replace('/api/v1', '') + '/oauth2/token';

  async exchangeCodeForToken(code: string): Promise<TokenResponse> {
    const codeVerifier = this.pkceService.getStoredVerifier();

    console.log('[AuthService] exchangeCodeForToken - Starting');
    console.log('[AuthService] Code:', code.substring(0, 20) + '...');
    console.log('[AuthService] Code Verifier:', codeVerifier?.substring(0, 20) + '...');

    if (!codeVerifier) {
      throw new Error('PKCE verifier not found');
    }

    try {
      console.log('[AuthService] Requesting token from:', this.tokenEndpoint);
      const response = await this.requestToken({
        grant_type: 'authorization_code',
        client_id: environment.clientId,
        code,
        redirect_uri: environment.redirectUri,
        code_verifier: codeVerifier,
      });

      console.log('[AuthService] Token response received');
      console.log('[AuthService] Access Token:', response.access_token.substring(0, 50) + '...');

      this.tokenService.setTokens(
        response.access_token,
        response.refresh_token,
        response.expires_in,
        response.token_type
      );

      this.pkceService.clearVerifier();
      this.authStateService.setAuthenticated();

      console.log('[AuthService] Tokens saved, authentication state set');

      return response;
    } catch (error) {
      console.error('[AuthService] Token exchange error:', error);
      this.authStateService.setError('Failed to exchange code for token');
      throw error;
    }
  }

  async refreshToken(): Promise<TokenResponse> {
    const refreshToken = this.tokenService.getRefreshToken();

    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      const response = await this.requestToken({
        grant_type: 'refresh_token',
        client_id: environment.clientId,
        refresh_token: refreshToken,
      });

      this.tokenService.setTokens(
        response.access_token,
        response.refresh_token,
        response.expires_in,
        response.token_type
      );

      return response;
    } catch (error) {
      console.error('Token refresh error:', error);
      this.logout();
      throw error;
    }
  }

  isAuthenticated(): boolean {
    return this.tokenService.hasAccessToken() && !this.tokenService.isTokenExpired();
  }

  getAccessToken(): string | null {
    return this.tokenService.getAccessToken();
  }

  isTokenExpired(): boolean {
    return this.tokenService.isTokenExpired();
  }

  logout(): void {
    this.tokenService.clearTokens();
    this.authStateService.setUnauthenticated();
  }

  private async requestToken(params: Record<string, string>): Promise<TokenResponse> {
    const httpParams = new HttpParams({ fromObject: params });
    const response = await firstValueFrom(
      this.http.post<TokenResponse>(this.tokenEndpoint, httpParams.toString(), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
    );
    return response;
  }
}
