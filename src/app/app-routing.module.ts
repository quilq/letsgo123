import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/auth/signin/signin.component';
import { SignupComponent } from './user/auth/signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { PopularPlacesComponent } from './core/popular-places/popular-places.component';
import { TourComponent } from './tour/tour.component';
import { TourDetailsComponent } from './tour/tour-details/tour-details.component';

const appRoutes: Routes = [
  { path: 'popular-places', component: PopularPlacesComponent },
  { path: 'tour/:place', component: TourComponent },
  { path: 'tour-details/:id', component: TourDetailsComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'user', component: UserComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: PopularPlacesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
