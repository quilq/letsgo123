import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

import { Tour } from '../tour.model';
import { AppState, allTours, selectTours, selectedTour } from '../../store/app.reducers';
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
  similarTour: Tour[] = [];

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.store.dispatch(new TourActions.OnGetTourByID(id));
    this.store.select(selectedTour).subscribe(selectedTour => this.selectedTour = selectedTour);

    // this.store.select(hasLoaded).subscribe(
    //   hasLoaded => {
    //     if (!hasLoaded) {
    //       this.store.dispatch(new TourActions.OnGetTours());
    //     } else {
    //       this.store.select(allTours).subscribe(tours => {
    //         this.selectedTour = this.findTourByID(tours, id);
    //         let address = this.selectedTour.journey[0].city;

    //         for (let i = 0; i < tours.length; i++) {
    //           for (let ii = 0; ii < tours[i].journey.length; ii++) {
    //             if (tours[i].journey[ii].city === address) {
    //               this.similarTours.push(tours[i]);
    //               break;
    //             }
    //           }
    //         }
    //       })
    //     }
    //   }
    // )

    // this.store.select('tours').subscribe(toursState => {
    //   if (!toursState.hasLoaded) {
    //     this.store.dispatch(new TourActions.OnGetTours());
    //   } else {
    //     let allTours = toursState.tours;
    //     this.selectedTour = this.findTourByID(allTours, id);
    //     let address = this.selectedTour.journey[0].city;

    //     for (let i = 0; i < allTours.length; i++) {
    //       for (let ii = 0; ii < allTours[i].journey.length; ii++) {
    //         if (allTours[i].journey[ii].city === address) {
    //           this.similarTours.push(allTours[i]);
    //           break;
    //         }
    //       }
    //     }
    //   }
    // });

  }

  // findTourByID(tours: Tour[], id: string) {
  //   let selectedTour: Tour = new Tour();
  //   for (let i = 0; i < tours.length; i++) {

  //     if (id === tours[i]._id) {
  //       selectedTour = tours[i];
  //       break;
  //     }
  //   }
  //   selectedTour.journey.forEach(info => {
  //     info.formattedDate = moment(info.date).format('DD/MM/YYYY');
  //   });

  //   return selectedTour;
  // }

  bookTour(tour: Tour) {
    this.store.dispatch(new BookingActions.BookTour({ tour: tour, dates: [new Date()] }));
  }

  viewTour(tour: Tour) {
    this.store.dispatch(new TourActions.GetTourByID(tour));
  }

}
