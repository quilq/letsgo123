import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './booking.component';

const bookingRoutes: Routes = [{ path: 'booking', component: BookingComponent }]

@NgModule({
    imports: [RouterModule.forChild(bookingRoutes)],
    exports: [RouterModule]
})

export class BookingRoutingModule { }