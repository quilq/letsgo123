import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Booking } from './../store/booking.models';
import { BookingState } from './../store/booking.reducer';
import { Hotel } from './../hotel.model';
import * as BookingActions from './../store/booking.actions';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookings$: Observable<Booking[]>;

  constructor(private store: Store<BookingState>) {
    this.bookings$ = store.select('booking');
  }

  ngOnInit() {
  }

  removeHotel(number: number) {
    this.store.dispatch(new BookingActions.RemoveHotel(number));
  }
}
