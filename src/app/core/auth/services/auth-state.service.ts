import { Injectable, signal } from '@angular/core';

export type AuthState = 'unauthenticated' | 'authenticating' | 'authenticated' | 'error';

export interface AuthStatus {
    state: AuthState;
    error?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthStateService {
    private readonly authStatus = signal<AuthStatus>({
        state: 'unauthenticated'
    });

    readonly authState$ = this.authStatus.asReadonly();

    setAuthenticating(): void {
        this.authStatus.set({ state: 'authenticating' });
    }

    setAuthenticated(): void {
        this.authStatus.set({ state: 'authenticated' });
    }

    setUnauthenticated(): void {
        this.authStatus.set({ state: 'unauthenticated' });
    }

    setError(error: string): void {
        this.authStatus.set({ state: 'error', error });
    }

    isAuthenticated(): boolean {
        return this.authStatus().state === 'authenticated';
    }

    getState(): AuthStatus {
        return this.authStatus();
    }
}
