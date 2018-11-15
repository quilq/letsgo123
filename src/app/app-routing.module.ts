import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { SigninComponent } from './user/auth/signin/signin.component';
import { SignupComponent } from './user/auth/signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelDetailsComponent } from './hotel/hotel-details/hotel-details.component';

const appRoutes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'hotel-details', component: HotelDetailsComponent },
  { path: 'user', component: UserComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: MainPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
