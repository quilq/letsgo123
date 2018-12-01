import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.reducers';
import * as TourActions from '../../tour/store/tour.action';
import * as BookingActions from '../../booking/store/booking.actions';
import { Tour } from '../tour.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tour-by-address',
  templateUrl: './tour-by-address.component.html',
  styleUrls: ['./tour-by-address.component.css']
})
export class TourByAddressComponent implements OnInit {
  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) { }

  address = '';
  toursByAddress: Tour[] = [];

  ngOnInit() {
    this.address = this.activatedRoute.snapshot.paramMap.get('address');
    this.findTourByAddress(this.address);
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
