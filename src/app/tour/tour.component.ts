import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { Tour } from './tour.model';
import { AppState, hasLoaded, allTours, toursToShow } from '../store/app.reducers';
import * as BookingActions from '../booking/store/booking.actions';
import * as TourActions from './store/tour.action';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})

export class TourComponent implements OnInit {

  place = '';
  title = '';
  tours: Tour[] = [];
  toursToShow: Tour[] = [];

  // constructor(private store: Store<AppState>, private tourService: TourService) { }
  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.place = this.activatedRoute.snapshot.paramMap.get('place');

    this.store.select(hasLoaded).subscribe(hasLoaded => {
      if (!hasLoaded) {
        this.store.dispatch(new TourActions.OnGetTours());
      }
      this.store.select(allTours).subscribe(tours => {
        this.tours = tours;

        if (this.place === 'search-result') {
          this.title = 'Tours to ' + this.activatedRoute.snapshot.paramMap.get('to');
          return;
        } else if (this.place === 'all') {
          this.title = 'Popular tours';
          this.store.dispatch(new TourActions.UpdateToursToShow(tours));
        } else {
          this.title = 'Tours to ' + this.place;
          this.findTourByAddress(this.place);
        }
      });

      this.store.select(toursToShow).subscribe(toursToShow => {
        this.toursToShow = toursToShow;
      })
    }
    )

    // this.store.select('tours').pipe(
    //   map(toursState => toursState.hasLoaded)
    // ).subscribe(hasLoaded => {
    //   if (!hasLoaded) {
    //     this.store.dispatch(new TourActions.OnGetTours());
    //   }
    //   this.store.select('tours').pipe(
    //     map(toursState => toursState.tours)
    //   ).subscribe(tours => {
    //     this.toursToShow = tours;
    //     this.tours = tours;
    //   });
    // });
  }


  loadMoreTours() {
    this.store.dispatch(new TourActions.OnGetTours({ skip: this.tours.length, limit: 20 }));
  }

  bookTour(tour: Tour) {
    this.store.dispatch(new BookingActions.BookTour({ tour: tour, dates: [new Date()] }));
  }

  findTourByAddress(place: string) {
    this.store.select(hasLoaded).subscribe(
      hasLoaded => {
        if (hasLoaded) {
          let allTour = this.tours;
          let toursByAddress: Tour[] = [];
          for (let i = 0; i < allTour.length; i++) {
            for (let ii = 0; ii < allTour[i].journey.length; ii++) {
              if (allTour[i].journey[ii].city === place) {
                toursByAddress.push(allTour[i]);
                break;
              }
            }
          }
          this.store.dispatch(new TourActions.UpdateToursToShow(toursByAddress));
        } else {
          console.log('\'tours\' were not loaded !');
        }
      }
    )
  }

}
