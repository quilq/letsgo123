import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { Booking } from './booking.model';
import { AppState } from '../store/app.reducers';
import * as BookingActions from './store/booking.actions';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookings: Booking[];
  amount = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('booking').pipe(
      map(bookingState => bookingState.booking)
    ).subscribe(bookings => {
      this.bookings = bookings
      this.amount = 0;
      for (let i = 0; i < bookings.length; i++) {
        this.amount = this.amount + this.bookings[i].tour.price;
      }
    });
  }

  removeTour(i: number) {
    this.store.dispatch(new BookingActions.RemoveTour(i));
  }
}
