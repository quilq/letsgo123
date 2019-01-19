import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { BookingRoutingModule } from './booking-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    BookingRoutingModule,
    MaterialModule
  ],
  declarations: [
    BookingComponent
  ]
})
export class BookingModule { }
