import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { AppState, departurePlaces, destinations } from '../../store/app.reducers';
import * as TourActions from '../../tour/store/tour.action';
import * as PopularPlacesAction from '../../popular-places/store/popular-places.action';

export interface Place {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None //to modify search bar style
})
export class SearchComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  from = '';
  to = '';
  date = moment();

  fromWhere: Place[] = [];
  toWhere: Place[] = [];

  ngOnInit() {
    this.store.select(departurePlaces).subscribe(places => {
      if (places.length === 0) {
        this.store.dispatch(new PopularPlacesAction.OnGetDeparturePlaces());
      } else {
        for (let i = 0; i < places.length; i++) {
          let place = { value: places[i], viewValue: places[i] }
          this.fromWhere[i] = place;
        }
      }
    });

    this.store.select(destinations).subscribe(places => {
      if (places.length === 0) {
        this.store.dispatch(new PopularPlacesAction.OnGetDestinations());
      } else {
        for (let i = 0; i < places.length; i++) {
          let place = { value: places[i], viewValue: places[i] }
          this.toWhere[i] = place;
        }
      }
    });
  }

  searchTour(from, to, date) {
    this.store.dispatch(new TourActions.OnSearchTourByAddressAndDate({ from, to, date }));
    this.router.navigate(['/tour/search-result', { from, to, date }]);
  }

}
