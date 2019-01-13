import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { TourComponent } from './tour/tour.component';
import { BookingComponent } from './booking/booking.component';
import { SigninComponent } from './user/auth/signin/signin.component';
import { SignupComponent } from './user/auth/signup/signup.component';
import { MaterialModule } from './material/material.module';
import { PopularPlacesComponent } from './popular-places/popular-places.component';
import { TourEffects } from './tour/store/tour.effect';
import { AuthEffects } from './user/auth/store/auth.effects';
import { reducers } from './store/app.reducers';
import { TourDetailsComponent } from './tour/tour-details/tour-details.component';
import { SearchComponent } from './shared/search/search.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { FilterComponent } from './shared/filter/filter.component';
import { PopularPlacesEffects } from './popular-places/store/popular-places.effect';
import { DailyDealsComponent } from './tour/daily-deals/daily-deals.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TourComponent,
    BookingComponent,
    SigninComponent,
    SignupComponent,
    TourDetailsComponent,
    PopularPlacesComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    DailyDealsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
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
