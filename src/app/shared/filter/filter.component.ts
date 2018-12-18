import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, allTours, toursToShow } from '../../store/app.reducers';
import { Tour } from '../../tour/tour.model';
import * as TourActions from '../../tour/store/tour.action';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  priceRange = '';
  daysNumber = '';
  type = '';

  allTours: Tour[] = [];
  toursToShow: Tour[] = [];
  filterTours: Tour[] = [];

  ngOnInit() {
    this.store.select(toursToShow).subscribe(tours => {
      this.allTours = tours;
    });
  }

  filter() {
    this.filterTours = this.allTours;
    
    if (this.type === 'luxary') {
      this.toursToShow = this.filterTours.filter(tour => tour.tourType.toLowerCase() === 'luxary');
    } else if (this.type === 'economy') {
      this.toursToShow = this.filterTours.filter(tour => tour.tourType.toLowerCase() === 'economy');
    } else {
      this.toursToShow = this.filterTours;
    }

    this.filterTours = this.toursToShow;

    if (this.priceRange === 'under100') {
      this.toursToShow = this.filterTours.filter(tour => tour.price < 100);
    } else if (this.priceRange === 'over100') {
      this.toursToShow = this.filterTours.filter(tour => tour.price >= 100);
    } else {
      this.toursToShow = this.filterTours;
    }

    this.filterTours = this.toursToShow;

    if (this.daysNumber === "1to3") {
      this.toursToShow = this.filterTours.filter(tour => tour.journey.length <= 3);
    } else if (this.daysNumber === "from4") {
      this.toursToShow = this.filterTours.filter(tour => tour.journey.length > 3);
    } else {
      this.toursToShow = this.filterTours;
    }

    this.store.dispatch(new TourActions.UpdateToursToShow(this.toursToShow));
  }
}
