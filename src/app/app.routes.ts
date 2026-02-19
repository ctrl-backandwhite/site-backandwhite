import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './extrapages/page404/page404.component';
import { CyptolandingComponent } from './cyptolanding/cyptolanding.component';
import { LandingComponent } from './landing/landing.component';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { AuthCallbackComponent } from './core/auth/auth-callback.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LayoutComponent } from './layouts/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        pathMatch: 'full',
    },
    {
        path: 'auth/callback',
        component: AuthCallbackComponent,
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
    },
    {
        path: "auth",
        loadChildren: () =>
            import("./account/account.module").then((m) => m.AccountModule),
    },
    {
        path: "dashboard",
        component: LayoutComponent,
        loadChildren: () =>
            import("./pages/pages.module").then((m) => m.PagesModule),
        canActivate: [AuthGuard],
    },
    {
        path: "pages",
        loadChildren: () =>
            import("./extrapages/extrapages.module").then((m) => m.ExtrapagesModule),
        canActivate: [AuthGuard],
    },
    { path: "crypto-ico-landing", component: CyptolandingComponent },
    { path: "**", component: Page404Component },
];
