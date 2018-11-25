import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

import * as TourActions from '../store/tour.action';
import { Tour } from '../tour.model';
import { AppState } from '../../store/app.reducers';


@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})

export class TourDetailsComponent implements OnInit {

  tours: Tour[] = [];
  selectedTour: Tour = new Tour();

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.store.select('tours').pipe(
      map(toursState => toursState.hasLoaded)
    ).subscribe(hasLoaded => {
      if (!hasLoaded) {
        this.store.dispatch(new TourActions.OnGetTourByID(id));
      }
      this.store.select('tours').pipe(
        map(toursState => toursState.tours)
      ).subscribe(tours => {
        this.tours = tours;
        this.selectedTour = this.findTour(id);
      });
    }
    )
  }

  findTour(id) {
    let selectedTour: Tour = new Tour();
    for (let i = 0; i < this.tours.length; i++) {

      if (id === this.tours[i]._id) {
        selectedTour = this.tours[i];
        break;
      }
    }
    selectedTour.journey.forEach(info => {
      info.formattedDate = moment(info.date).format('DD/MM/YYYY');
    });

    return selectedTour;
  }
}
