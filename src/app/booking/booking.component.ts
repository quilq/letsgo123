import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  bookings$: Observable<Booking[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.bookings$ = this.store.select('booking').pipe(
      map(bookingState => bookingState.booking)
    )
  }

  removeTour(i: number) {
    this.store.dispatch(new BookingActions.RemoveTour(i));
  }
}
