import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

import * as TourActions from '../store/tour.action';
import * as BookingActions from '../../booking/store/booking.actions';
import { Tour } from '../tour.model';
import { AppState } from '../../store/app.reducers';


@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})

export class TourDetailsComponent implements OnInit {

  selectedTour: Tour = new Tour();
  similarTours: Tour[] = [];

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.store.select('tours').subscribe(toursState => {
      if (!toursState.hasLoaded) {
        this.store.dispatch(new TourActions.OnGetTours());
      } else {
        let allTours = toursState.tours;
        this.selectedTour = this.findTourByID(allTours, id);
        let address = this.selectedTour.journey[0].city;

        for (let i = 0; i < allTours.length; i++) {
          for (let ii = 0; ii < allTours[i].journey.length; ii++) {
            if (allTours[i].journey[ii].city === address) {
              this.similarTours.push(allTours[i]);
              break;
            }
          }
        }

      }
    });

  }

  findTourByID(tours: Tour[], id: string) {
    let selectedTour: Tour = new Tour();
    for (let i = 0; i < tours.length; i++) {

      if (id === tours[i]._id) {
        selectedTour = tours[i];
        break;
      }
    }
    selectedTour.journey.forEach(info => {
      info.formattedDate = moment(info.date).format('DD/MM/YYYY');
    });

    return selectedTour;
  }

  bookTour(tour: Tour){
    this.store.dispatch(new BookingActions.BookTour({tour: tour, dates: [new Date()]}));
  }

}
