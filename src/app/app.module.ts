import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './store/app.reducers';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { BookingModule } from './booking/booking.module';
import { TourModule } from './tour/tour.module';
import { SharedModule } from './shared/shared.module';
import { PopularPlacesModule } from './popular-places/popular-places.module';
import { AppRoutingModule } from './app-routing.module';

import { TourEffects } from './tour/store/tour.effect';
import { AuthEffects } from './user/auth/store/auth.effects';
import { PopularPlacesEffects } from './popular-places/store/popular-places.effect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UserModule,
    CoreModule,
    TourModule,
    SharedModule,
    BookingModule,
    PopularPlacesModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10, // Retains last 10 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([TourEffects, AuthEffects, PopularPlacesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
