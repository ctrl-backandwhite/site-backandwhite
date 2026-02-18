import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeafletComponent } from "./leaflet/leaflet.component";
import { AmchartsComponent } from './amcharts/amcharts.component';

const routes: Routes = [
    {
        path: "leaflet",
        component: LeafletComponent
    }
    ,
    {
        path: "AmChart",
        component: AmchartsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapsRoutingModule { }
