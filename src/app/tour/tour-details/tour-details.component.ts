import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

import * as TourActions from '../store/tour.action';
import * as DestinationsActions from '../../main-page/store/destinations.action';
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

    //Check if toursState was loaded, if not => get tour by id from server
    this.store.select('tours').pipe(
      map(toursState => toursState.hasLoaded)
    ).subscribe(hasLoaded => {
      console.log('Check tour !');
      if (!hasLoaded) {
        console.log('Check tour. Hasloaded: ', hasLoaded);
        this.store.dispatch(new TourActions.OnGetTourByID(id));
      }
    });

    //Find tour with id
    this.store.select('tours').pipe(
      map(toursState => toursState.tours)
    ).subscribe(tours => {
      this.selectedTour = this.findTour(tours, id);
      console.log('Find tour with id. Selected tours: ', this.selectedTour);
    });

    //Check if a destination was loaded, if not => Get tour by address action
    this.store.select('destinations').pipe(
      map(destinationsState => destinationsState.loadedDestination)
    ).subscribe(loadedDestination => {
      console.log('Check loaded destination: ', loadedDestination);
      if (loadedDestination === '') {
        console.log('selected tours with loaded destinations ', this.selectedTour);
        console.log('selected tour journey ', this.selectedTour.journey[0].city);
        this.store.dispatch(new DestinationsActions.OnGetTourByAddress(this.selectedTour.journey[0].city));
      }
    });

    //Find similar tours
    this.store.select('destinations').pipe(
      map(destinationsState => destinationsState.toursByDestination)
    ).subscribe(tours => {
      this.similarTours = tours;
      console.log('Similar tours ', this.similarTours);
    });
  }

  findTour(tours: Tour[], id: string) {
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
}
