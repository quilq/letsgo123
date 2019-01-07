import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Tour } from './tour.model';
import { AppState, toursToShow, toursLoaded, allTours } from '../store/app.reducers';
import * as BookingActions from '../booking/store/booking.actions';
import * as TourActions from './store/tour.action';
import { TourService } from './tour.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})

export class TourComponent implements OnInit {

  place = '';
  title = '';
  onLoadMoreTour = false;
  numberOfTours = 0;
  toursToShow$: Observable<Tour[]>;

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute, private tourService: TourService) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      // console.log('url: ', url);

      this.place = this.activatedRoute.snapshot.paramMap.get('place');
      this.onLoadMoreTour = false;

      //Search
      if (this.place === 'search-result') {
        this.title = 'Tours to ' + this.activatedRoute.snapshot.paramMap.get('to');
        return;

        //Explore
      } else if (this.place === 'all') {
        this.title = 'Popular tours';
        this.loadTours();

        //Today's deal
      } else if (this.place === 'discount') {
        this.title = 'Tours with best prices';
        this.findDiscountedTour();

        //Tours to 'places'
      } else {
        this.title = 'Tours to ' + this.place;
        this.findTourByAddress(this.place);
      }
    });

    this.toursToShow$ = this.store.select(toursToShow);
  }

  loadTours() {
    this.store.select(toursLoaded).subscribe(
      hasLoaded => {
        if (!hasLoaded) {
          this.store.dispatch(new TourActions.OnGetTours());
        } else {
          this.store.select(allTours).subscribe(
            tours => {
              this.store.dispatch(new TourActions.UpdateToursToShow(tours));
              this.numberOfTours = this.numberOfTours + tours.length;
            }
          )
        }
      }
    );
    this.onLoadMoreTour = true;
  }

  findTourByAddress(place: string) {
    this.store.dispatch(new TourActions.OnGetTourByAddress(place));
  }

  findDiscountedTour() {
    this.store.dispatch(new TourActions.OnGetDiscountedTours());
  }

  bookTour(tour: Tour) {
    this.store.dispatch(new BookingActions.BookTour({ tour: tour, dates: [new Date()] }));
  }

  loadMoreTours() {
    this.store.dispatch(new TourActions.OnGetTours({ skip: this.numberOfTours }));
  }

  // addTour(){
  //   this.tourService.addNewTour().subscribe(res => console.log(res));
  // }

}
