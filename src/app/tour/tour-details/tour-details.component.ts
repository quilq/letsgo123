import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

import { Tour } from '../tour.model';
import { AppState, allTours, selectTours, selectedTour, toursToShow } from '../../store/app.reducers';
import * as TourActions from '../store/tour.action';
import * as BookingActions from '../../booking/store/booking.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})

export class TourDetailsComponent implements OnInit {

  selectedTour: Tour = new Tour();
  similarTours: Tour[] = [];

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.store.dispatch(new TourActions.OnGetTourByID(id));

    this.store.select(selectedTour).subscribe(selectedTour => {
      this.selectedTour = selectedTour;
      this.store.dispatch(new TourActions.OnGetTourByAddress(this.selectedTour.journey[0].city));
    });

    //Todo: exclude the current tour
    this.store.select(toursToShow).subscribe(
      toursToShow => this.similarTours = toursToShow.slice(0, 5)
    )
  }

  bookTour(tour: Tour) {
    this.store.dispatch(new BookingActions.BookTour({ tour: tour, dates: [new Date()] }));
  }

  viewTour(tour: Tour) {
    this.store.dispatch(new TourActions.GetTourByID(tour));
    this.router.navigate(['tour-details/', tour._id]);
  }

}
