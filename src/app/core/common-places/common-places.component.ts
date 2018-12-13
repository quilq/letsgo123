import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, hasLoaded, allCities } from '../../store/app.reducers';
import * as TourActions from '../../tour/store/tour.action';

@Component({
  selector: 'app-common-places',
  templateUrl: './common-places.component.html',
  styleUrls: ['./common-places.component.css']
})
export class CommonPlacesComponent implements OnInit {

  commonPlaces: string[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(hasLoaded).subscribe(
      hasLoaded => {
        if (!hasLoaded) {
          this.store.dispatch(new TourActions.OnGetTours());
        }
      }
    )

    this.store.select(allCities).subscribe(
      allCities => {
        this.commonPlaces = allCities.slice(0, 6);
      }
    );
  }

}
