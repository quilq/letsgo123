import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Tour } from './tour.model';
import { AppState } from '../store/app.reducers';
import * as BookingActions from '../booking/store/booking.actions';
import * as TourActions from './store/tour.action';
import { TourService } from './tour.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})

export class TourComponent implements OnInit {

  tours: Tour[] = [];

  // constructor(private store: Store<AppState>, private tourService: TourService) { }
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('tours').pipe(
      map(toursState => toursState.hasLoaded)
    ).subscribe(hasLoaded => {
      if (!hasLoaded){
        this.store.dispatch(new TourActions.OnGetTours());
      }
      this.store.select('tours').pipe(
        map(toursState => toursState.tours)
      ).subscribe(tours => this.tours = tours);
    });
  }

  // addTour(){
  //   this.tourService.addNewTour().subscribe();
  // }

  bookTour(tour: Tour) {
    let dates = [new Date()];
    this.store.dispatch(new BookingActions.BookTour({ tour: tour, dates: dates }));
  }

  loadMoreTours() {
    this.store.dispatch(new TourActions.OnGetTours({ skip: this.tours.length, limit: 5 }));
  }
}
