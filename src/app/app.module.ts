import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserComponent } from './user/user.component';
import { HotelComponent } from './hotel/hotel.component';
import { BookingComponent } from './booking/booking.component';
import { SigninComponent } from './user/auth/signin/signin.component';
import { SignupComponent } from './user/auth/signup/signup.component';
import { bookingReducer } from './booking/store/booking.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HotelEffects } from './hotel/store/hotel.effect';
import { hotelReducer } from './hotel/store/hotel.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    HotelComponent,
    BookingComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      booking: bookingReducer,
      hotels: hotelReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10, // Retains last 10 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([HotelEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
