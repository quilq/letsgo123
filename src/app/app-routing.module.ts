import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingComponent } from './booking/booking.component';
import { PopularPlacesComponent } from './popular-places/popular-places.component';
import { TourComponent } from './tour/tour.component';
import { TourDetailsComponent } from './tour/tour-details/tour-details.component';
import { DailyDealsComponent } from './tour/daily-deals/daily-deals.component';

const appRoutes: Routes = [
  { path: '', component: PopularPlacesComponent },
  { path: 'deals', component: DailyDealsComponent },
  { path: 'tour/:place', component: TourComponent },
  { path: 'tour-details/:id', component: TourDetailsComponent },
  { path: 'booking', component: BookingComponent },
  { path: '**', component: PopularPlacesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
