import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Tour } from '../tour.model';
import { AppState, toursToShow } from '../../store/app.reducers';
import * as TourActions from '../store/tour.action';
import * as BookingActions from '../../booking/store/booking.actions';

@Component({
  selector: 'app-daily-deals',
  templateUrl: './daily-deals.component.html',
  styleUrls: ['./daily-deals.component.css']
})
export class DailyDealsComponent implements OnInit {

  toursToShow$: Observable<Tour[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.findDiscountedTour();
    this.toursToShow$ = this.store.select(toursToShow);
  }

  findDiscountedTour() {
    this.store.dispatch(new TourActions.OnGetDiscountedTours());
  }

  bookTour(tour: Tour) {
    this.store.dispatch(new BookingActions.BookTour({ tour: tour, dates: [new Date()] }));
  }

}
