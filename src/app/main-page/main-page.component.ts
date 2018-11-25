import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { Tour } from '../tour/tour.model';
import { AppState } from '../store/app.reducers';
import * as TourActions from '../tour/store/tour.action';
import * as DestinationsActions from '../main-page/store/destinations.action'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // tours: Tour[] = [];
  popularPlaces: string[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // this.store.select('tours').pipe(
    //   map(toursState => toursState.hasLoaded)
    // ).subscribe(hasLoaded => {
    //   if (!hasLoaded) {
    //     this.store.dispatch(new TourActions.OnGetTours());
    //   }
    //   this.store.select('tours').pipe(
    //     map(toursState => toursState.tours)
    //   ).subscribe(tours => this.tours = tours);
    // });
    this.store.dispatch(new DestinationsActions.OnGetDestinations());
    this.store.select('destinations').pipe(
      map(destinationsState => destinationsState.destinations)
    ).subscribe(destinations => this.popularPlaces = destinations);

  }


  // getPopularPlaces(){
  //   this.tourService.getPopularPlaces().subscribe(res => {
  //     this.popularPlaces = res;
  //     console.log(res)
  //   });
  // }

  // findTourByAddress(address: string){
  //   this.tourService.findTourByAddress(address).subscribe(res =>       {
  //     console.log(res)
  //     });
  // }

}
