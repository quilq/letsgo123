import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PopularPlacesComponent } from './popular-places/popular-places.component';

const appRoutes: Routes = [
  { path: '', component: PopularPlacesComponent },
  { path: '**', component: PopularPlacesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
