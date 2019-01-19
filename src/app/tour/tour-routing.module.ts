import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourComponent } from './tour.component';
import { DailyDealsComponent } from './daily-deals/daily-deals.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';

const tourRoutes: Routes = [
  { path: 'tour/:place', component: TourComponent },
  { path: 'deals', component: DailyDealsComponent },
  { path: 'tour-details/:id', component: TourDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(tourRoutes)],
  exports: [RouterModule]
})

export class TourRoutingModule { }
