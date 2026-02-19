import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly ACCESS_TOKEN_KEY = 'access_token';
  private readonly REFRESH_TOKEN_KEY = 'refresh_token';
  private readonly TOKEN_EXPIRY_KEY = 'token_expiry';
  private readonly TOKEN_TYPE_KEY = 'token_type';

  setTokens(
    accessToken: string,
    refreshToken?: string,
    expiresIn?: number,
    tokenType: string = 'Bearer'
  ): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(this.TOKEN_TYPE_KEY, tokenType);

    if (refreshToken) {
      localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
    }

    if (expiresIn) {
      const expiryTime = new Date().getTime() + expiresIn * 1000;
      localStorage.setItem(this.TOKEN_EXPIRY_KEY, expiryTime.toString());
    }
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY);
  }

  getTokenType(): string {
    return localStorage.getItem(this.TOKEN_TYPE_KEY) || 'Bearer';
  }

  isTokenExpired(): boolean {
    const expiryTime = localStorage.getItem(this.TOKEN_EXPIRY_KEY);
    if (!expiryTime) {
      return false;
    }
    return new Date().getTime() > parseInt(expiryTime, 10);
  }

  hasAccessToken(): boolean {
    return this.getAccessToken() !== null;
  }

  clearTokens(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    localStorage.removeItem(this.REFRESH_TOKEN_KEY);
    localStorage.removeItem(this.TOKEN_EXPIRY_KEY);
    localStorage.removeItem(this.TOKEN_TYPE_KEY);
  }
}
