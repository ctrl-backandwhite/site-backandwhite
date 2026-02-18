import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Leaflet Map
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapsRoutingModule } from './maps-routing.module';

@NgModule({
  declarations: [],
  imports: [
    MapsRoutingModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapsModule { }
