import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // Don't logout on token endpoint 401 (let auth service handle it)
                if (!request.url.includes('/oauth2/token')) {
                    console.log('[ErrorInterceptor] 401 error, logging out');
                    this.authService.logout();
                    location.reload();
                }
            }
            const error = err.error.message || err.statusText;
            return throwError(() => error);
        }))
    }
}
