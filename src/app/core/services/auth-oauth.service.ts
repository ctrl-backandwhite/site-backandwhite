import { Injectable } from '@angular/core';

/**
 * OAuth2 Authentication Service
 * Redirige a webapp para autenticación centralizada
 */
@Injectable({
    providedIn: 'root'
})
export class AuthOAuthService {
    // URL de la aplicación de autorización
    private authServerUrl = 'http://localhost:4200'; // Cambiar según ambiente

    constructor() { }

    /**
     * Redirige al formulario de login en webapp
     */
    redirectToLogin(): void {
        // Guardar la página actual para redirigir después del login
        localStorage.setItem('landingReturnUrl', window.location.href);

        // Redirigir a webapp
        window.location.href = `${this.authServerUrl}/auth/callback?returnUrl=${encodeURIComponent('/admin')}`;
    }

    /**
     * Redirige a la zona de administración de webapp
     */
    redirectToAdmin(): void {
        window.location.href = `${this.authServerUrl}/admin`;
    }

    /**
     * Obtiene el token de sesión de webapp si está disponible
     */
    getSharedToken(): string | null {
        // El token se comparte entre webapp y site-backandwhite
        return localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
    }

    /**
     * Verifica si el usuario está autenticado
     */
    isAuthenticated(): boolean {
        return !!this.getSharedToken();
    }

    /**
     * Limpia la sesión
     */
    logout(): void {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('refresh_token');
        localStorage.removeItem('landingReturnUrl');
    }
}
