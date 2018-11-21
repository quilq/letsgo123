import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';

import { Tour } from '../tour/tour.model';
import { AppState } from '../store/app.reducers';
import * as TourActions from '../tour/store/tour.action';
import * as DestinationsActions from '../main-page/store/destinations.action'
import { TourService } from '../tour/tour.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  tours: Tour[] = [];
  popularPlaces: string[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('tours').pipe(
      map(toursState => toursState.hasLoaded)
    ).subscribe(hasLoaded => {
      if (!hasLoaded) {
        this.store.dispatch(new TourActions.OnGetTours());
      }
      this.store.select('tours').pipe(
        map(toursState => toursState.tours)
      ).subscribe(tours => this.tours = tours);
    });
    this.store.dispatch(new DestinationsActions.OnGetDestinations());
    console.log('1111111111111111');
    this.store.select('destinations').pipe(
      tap(()=> console.log('destionations main page')),
      map(destinationsState => this.popularPlaces = destinationsState.destinations)

    )

  }

  findTourByAddress(address: string) {

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
