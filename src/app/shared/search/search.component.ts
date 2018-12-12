import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Tour } from 'src/app/tour/tour.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as TourActions from '../../tour/store/tour.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private store: Store<AppState>, private router: Router) { }

  from = '';
  to = '';
  date = moment();

  tours: Tour[] = [];

  ngOnInit() {
    this.store.select('tours').subscribe(toursState =>
      this.tours = toursState.tours
    )
  }

  searchTour(from, to, date) {
    let searchResult = [];
    this.tours.forEach(tour => {
      if ((tour.journey[0].city === from)
        && (moment(tour.journey[0].date).format('MMM Do YYYY') >= moment(date).format('MMM Do YYYY'))) {
        for (let i = 1; i < tour.journey.length; i++) {
          if (tour.journey[i].city === to) {
            searchResult.push(tour);
            break;
          }
        }
      }
    })
    console.log(searchResult);
    this.store.dispatch(new TourActions.UpdateToursToShow(searchResult));
    this.router.navigate(['/tour/search-result']);
  }

  fromWhere = [
    { value: 'Ha Noi', viewValue: 'Ha Noi' },
    { value: 'Ho Chi Minh City', viewValue: 'Ho Chi Minh City' },
    { value: 'Can Tho', viewValue: 'Can Tho' },
  ];

  toWhere = [
    { value: 'Ha Noi', viewValue: 'Ha Noi' },
    { value: 'Ho Chi Minh City', viewValue: 'Ho Chi Minh City' },
    { value: 'Can Tho', viewValue: 'Can Tho' },
  ];

}
