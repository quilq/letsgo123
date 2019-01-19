import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularPlacesComponent } from './popular-places.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    PopularPlacesComponent
  ]
})
export class PopularPlacesModule { }
