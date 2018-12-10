import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/auth/signin/signin.component';
import { SignupComponent } from './user/auth/signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { MainPageComponent } from './main-page/common-cities.component';
import { TourComponent } from './tour/tour.component';
import { TourDetailsComponent } from './tour/tour-details/tour-details.component';
import { TourByAddressComponent } from './tour/tour-by-address/tour-by-address.component';

const appRoutes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'tour', component: TourComponent },
  { path: 'tour-by-address/:address', component: TourByAddressComponent },
  { path: 'tour-details/:id', component: TourDetailsComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'user', component: UserComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: MainPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
