import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, allTours } from 'src/app/store/app.reducers';

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
  luxary = false;
  economy = false;

  tours: Tour[] = [];
  toursToShow: Tour[] = [];
  
  ngOnInit() {
    this.store.select(allTours).subscribe(tours => this.tours = tours);
  }

  filterByType() {
    if (this.economy && this.luxary) {
      this.toursToShow = this.tours;
    } else if (this.luxary) {
      this.toursToShow = this.tours.filter(tour => tour.tourType.toLowerCase() === 'luxary');
    } else if (this.economy) {
      this.toursToShow = this.tours.filter(tour => tour.tourType.toLowerCase() === 'economy');
    }
    this.store.dispatch(new TourActions.UpdateToursToShow(this.toursToShow));
  }

  filterByPrice() {
    if (this.priceRange === 'under100') {
      this.toursToShow = this.tours.filter(tour => tour.price < 100)
    } else if (this.priceRange === 'under100') {
      this.toursToShow = this.tours.filter(tour => tour.price >= 100)
    } else {
      this.toursToShow = this.tours;
    }
    this.store.dispatch(new TourActions.UpdateToursToShow(this.toursToShow));
  }

  filterByDays() {
    if (this.daysNumber === "lessthan3") {
      this.toursToShow = this.tours.filter(tour => tour.journey.length < 3);
    } else if (this.daysNumber === "from3") {
      this.toursToShow = this.tours.filter(tour => tour.journey.length >= 3);
    } else {
      this.toursToShow = this.tours;
    }
    this.store.dispatch(new TourActions.UpdateToursToShow(this.toursToShow));
  }


}
