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

  address = '';
  tours: Tour[] = [];
  toursToShow: Tour[] = [];
  
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
