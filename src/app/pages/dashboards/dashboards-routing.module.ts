import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { CryptoComponent } from './crypto/crypto.component';

const routes: Routes = [
    { path: '', redirectTo: 'crypto', pathMatch: 'full' },
    {
        path: 'default',
        component: DefaultComponent
    },
    {
        path: 'crypto',
        component: CryptoComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
