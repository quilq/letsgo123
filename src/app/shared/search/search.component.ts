import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { AppState, allTours, popularPlaces } from '../../store/app.reducers';
import * as TourActions from '../../tour/store/tour.action';

export interface Place {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  from = '';
  to = '';
  date = moment();

  fromWhere: Place[] = [];
  toWhere: Place[] = [];

  ngOnInit() {
    this.store.select(popularPlaces).subscribe(places => {
      if (places){
        for (let i = 0; i < places.length; i++) {
          let place = {value: places[i], viewValue: places[i]}
          this.fromWhere[i] = place;
          this.toWhere[i] = place;
        }
      }
    })
  }

  searchTour(from, to, date) {
    this.store.dispatch(new TourActions.OnSearchTourByAddressAndDate({from, to, date}));
    this.router.navigate(['/tour/search-result', {from, to, date}]);
  }

}
