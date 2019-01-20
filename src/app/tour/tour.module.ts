import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourComponent } from './tour.component';
import { DailyDealsComponent } from './daily-deals/daily-deals.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { TourRoutingModule } from './tour-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    TourRoutingModule,
    FlexLayoutModule
  ],
  declarations: [
    TourComponent,
    DailyDealsComponent,
    TourDetailsComponent
  ]
})
export class TourModule { }
