import { Injectable } from '@angular/core';

export interface PKCEChallenge {
    codeVerifier: string;
    codeChallenge: string;
}

@Injectable({
    providedIn: 'root'
})
export class PKCEService {
    private readonly VERIFIER_KEY = 'pkce_verifier';
    private readonly VERIFIER_LENGTH = 128;

    async generateChallengeAsync(): Promise<PKCEChallenge> {
        const codeVerifier = this.generateVerifier();
        const codeChallenge = await this.generateChallenge(codeVerifier);

        localStorage.setItem(this.VERIFIER_KEY, codeVerifier);

        return { codeVerifier, codeChallenge };
    }

    getStoredVerifier(): string | null {
        return localStorage.getItem(this.VERIFIER_KEY);
    }

    clearVerifier(): void {
        localStorage.removeItem(this.VERIFIER_KEY);
    }

    private generateVerifier(): string {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
        let result = '';
        for (let i = 0; i < this.VERIFIER_LENGTH; i++) {
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return result;
    }

    private async generateChallenge(verifier: string): Promise<string> {
        const encoder = new TextEncoder();
        const data = encoder.encode(verifier);
        const digest = await window.crypto.subtle.digest('SHA-256', data);
        return this.base64UrlEncode(digest);
    }

    private base64UrlEncode(buffer: ArrayBuffer): string {
        const bytes = new Uint8Array(buffer);
        let binary = '';
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary)
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    }
}
