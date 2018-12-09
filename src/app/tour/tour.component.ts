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
  toursToShow: Tour[] = [];
  priceRange = '';
  daysNumber = '';
  luxary = false;
  economy = false;

  // constructor(private store: Store<AppState>, private tourService: TourService) { }
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('tours').pipe(
      map(toursState => toursState.hasLoaded)
    ).subscribe(hasLoaded => {
      if (!hasLoaded) {
        this.store.dispatch(new TourActions.OnGetTours());
      }
      this.store.select('tours').pipe(
        map(toursState => toursState.tours)
      ).subscribe(tours => {
        this.toursToShow = tours;
        this.tours = tours;
      });
    });
  }

  // addTour(){
  //   this.tourService.addNewTour().subscribe();
  // }
  filterByType() {
    if (this.economy && this.luxary) {
      this.toursToShow = this.tours;
    } else if (this.luxary) {
      this.toursToShow = this.tours.filter(tour => tour.tourType.toLowerCase() === 'luxary');
    } else if (this.economy) {
      this.toursToShow = this.tours.filter(tour => tour.tourType.toLowerCase() === 'economy');
    }
  }

  filterByPrice() {
    if (this.priceRange === 'under100') {
      this.toursToShow = this.tours.filter(tour => tour.price < 100)
    } else if (this.priceRange === 'under100') {
      this.toursToShow = this.tours.filter(tour => tour.price >= 100)
    } else {
      this.toursToShow = this.tours;
    }
  }

  filterByDays() {
    if (this.daysNumber === "lessthan3") {
      this.toursToShow = this.tours.filter(tour => tour.journey.length < 3);
    } else if (this.daysNumber === "from3") {
      this.toursToShow = this.tours.filter(tour => tour.journey.length >= 3);
    } else {
      this.toursToShow = this.tours;
    }
  }

  bookTour(tour: Tour) {
    let dates = [new Date()];
    this.store.dispatch(new BookingActions.BookTour({ tour: tour, dates: dates }));
  }

  loadMoreTours() {
    this.store.dispatch(new TourActions.OnGetTours({ skip: this.tours.length, limit: 5 }));
  }
}
