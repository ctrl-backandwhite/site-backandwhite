import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="text-center">
        <div class="mb-4">
          <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
        </div>
        <h2 class="text-2xl font-bold text-gray-800">{{ 'Procesando autenticación...' }}</h2>
        <p class="text-gray-600 mt-2">{{ 'Por favor espere...' }}</p>
      </div>
    </div>
  `
})
export class AuthCallbackComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly authService = inject(AuthService);

  ngOnInit(): void {
    this.handleCallback();
  }

  private handleCallback(): void {
    try {
      const code = this.extractAuthorizationCode();
      const state = this.route.snapshot.queryParamMap.get('state');

      console.log('[AuthCallback] Starting callback processing');
      console.log('[AuthCallback] Code:', code?.substring(0, 20) + '...');
      console.log('[AuthCallback] State:', state);

      if (!code) {
        console.error('[AuthCallback] No authorization code found');
        this.router.navigate(['/']);
        return;
      }

      console.log('[AuthCallback] Exchanging code for token...');
      this.authService.exchangeCodeForToken(code)
        .then(() => {
          console.log('[AuthCallback] Token exchange successful');
          console.log('[AuthCallback] Current origin:', window.location.origin);
          console.log('[AuthCallback] Navigating to /dashboard');

          // Dar tiempo para que se completen los logs antes de navegar
          setTimeout(() => {
            window.location.href = `${window.location.origin}/dashboard`;
          }, 100);
        })
        .catch((error) => {
          console.error('[AuthCallback] Token exchange failed:', error);
          console.error('[AuthCallback] Error details:', JSON.stringify(error, null, 2));

          // Temporalmente navegar al dashboard para debug
          alert('Token exchange failed. Check console. Navigating to dashboard anyway for debug.');
          window.location.href = `${window.location.origin}/dashboard`;
        });
    } catch (error) {
      console.error('[AuthCallback] Unexpected error:', error);
      this.router.navigate(['/']);
    }
  }

  private extractAuthorizationCode(): string | null {
    const code = this.route.snapshot.queryParamMap.get('code');
    return code ? decodeURIComponent(code) : null;
  }
}
