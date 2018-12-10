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

  address = '';
  toursByAddress: Tour[] = [];

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
    this.address = this.activatedRoute.snapshot.paramMap.get('address');
    
    this.findTourByAddress(this.address);
  }

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


  loadMoreTours() {
    this.store.dispatch(new TourActions.OnGetTours({ skip: this.tours.length, limit: 5 }));
  }

  bookTour(tour: Tour){
    this.store.dispatch(new BookingActions.BookTour({tour: tour, dates: [new Date()]}));
  }

  findTourByAddress(address: string) {
    this.store.select('tours').subscribe(
      toursState => {
        if (!toursState.hasLoaded){
          this.store.dispatch(new TourActions.OnGetTours());
        } else {
          let allTour = toursState.tours;
          for (let i = 0; i < allTour.length; i++) {
            for (let ii = 0; ii < allTour[i].journey.length; ii++) {
              if (allTour[i].journey[ii].city === address) {
                this.toursByAddress.push(allTour[i]);
                break;
              }
  
            }
          }
        }
      })
  }

}
