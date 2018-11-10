import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import {FlexLayoutModule} from '@angular/flex-layout';

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
import { MaterialModule } from './material/material.module';
import { MainPageComponent } from './main-page/main-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { authReducer } from './user/auth/store/auth.reducers';
import { AuthEffects } from './user/auth/store/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    HotelComponent,
    BookingComponent,
    SigninComponent,
    SignupComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    StoreModule.forRoot({
      booking: bookingReducer,
      hotels: hotelReducer,
      auth: authReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10, // Retains last 10 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([HotelEffects, AuthEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
