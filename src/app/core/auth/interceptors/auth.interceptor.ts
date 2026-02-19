import { Injectable, inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

let isLoggingOut = false;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private readonly tokenService = inject(TokenService);
    private readonly authService = inject(AuthService);
    private readonly router = inject(Router);

    private isAuthEndpoint(url: string): boolean {
        return url.includes('/oauth2/token') ||
            url.includes('/oauth2/authorize') ||
            url.includes('/auth/logout') ||
            url.includes('/auth/revoke');
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Skip token attachment for OAuth endpoints
        if (this.isAuthEndpoint(req.url)) {
            return next.handle(req);
        }

        const token = this.tokenService.getAccessToken();
        const tokenType = this.tokenService.getTokenType();

        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `${tokenType} ${token}`
                }
            });
        }

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                // Si es un error 401 y no estamos en proceso de logout
                if (error.status === 401 && !isLoggingOut && !this.isAuthEndpoint(req.url)) {
                    isLoggingOut = true;

                    console.warn('[AuthInterceptor] Session expired (401). Logging out...');

                    this.authService.logout().subscribe({
                        next: () => {
                            this.router.navigate(['/']);
                            isLoggingOut = false;
                        },
                        error: () => {
                            this.router.navigate(['/']);
                            isLoggingOut = false;
                        }
                    });
                }

                return throwError(() => error);
            })
        );
    }
}
