import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.reducers';
import * as TourActions from '../../tour/store/tour.action';
import * as DestinationsActions from '../store/destinations.action';

@Component({
  selector: 'app-tour-by-address',
  templateUrl: './tour-by-address.component.html',
  styleUrls: ['./tour-by-address.component.css']
})
export class TourByAddressComponent implements OnInit {
  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) { }

  address = '';
  loadedDestinations = '';
  toursByDestination = [];

  ngOnInit() {
    this.address = this.activatedRoute.snapshot.paramMap.get('address');
    this.findTourByAddress(this.address);
    this.store.select('destinations').subscribe(destinations => {
        this.loadedDestinations = destinations.loadedDestination;
        this.toursByDestination = destinations.toursByDestination;
        this.store.dispatch(new TourActions.AddTours(this.toursByDestination));
      });
  }

  
  findTourByAddress(address: string) {
    this.store.dispatch(new DestinationsActions.OnGetTourByAddress(address));
  }



}
