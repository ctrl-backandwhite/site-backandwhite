import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/services/auth.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <!-- Header -->
      <div class="bg-white shadow-md border-b-2 border-blue-600">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-3xl font-bold text-gray-900">Back & White Admin</h1>
              <p class="text-gray-600 mt-1">{{ 'admin.welcome' | translate }}</p>
            </div>
            <button (click)="logout()" class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              {{ 'admin.logout' | translate }}
            </button>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ 'admin.dashboard' | translate }}</h3>
            <p class="text-gray-600">{{ 'admin.dashboardDesc' | translate }}</p>
          </div>

          <!-- Card 2 -->
          <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-600">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ 'admin.users' | translate }}</h3>
            <p class="text-gray-600">{{ 'admin.usersDesc' | translate }}</p>
          </div>

          <!-- Card 3 -->
          <div class="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-600">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ 'admin.settings' | translate }}</h3>
            <p class="text-gray-600">{{ 'admin.settingsDesc' | translate }}</p>
          </div>
        </div>

        <!-- User Info -->
        <div class="bg-white rounded-lg shadow-lg p-6 mt-8 border-2 border-gray-200">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ 'admin.userInfo' | translate }}</h2>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-gray-600 text-sm">{{ 'admin.accessToken' | translate }}</p>
              <p class="text-gray-900 font-mono text-sm break-all">{{ accessToken | slice: 0:50 }}...</p>
            </div>
            <div>
              <p class="text-gray-600 text-sm">{{ 'admin.tokenStatus' | translate }}</p>
              <p class="text-green-600 font-bold">{{ 'admin.active' | translate }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AdminComponent {
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly translateService = inject(TranslateService);

  accessToken = this.authService.getAccessToken() || '';

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
