import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { Tour } from '../tour/tour.model';
import { AppState, hasLoaded, allCities } from '../store/app.reducers';
import * as TourActions from '../tour/store/tour.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // tours: Tour[] = [];
  popularPlaces: string[];

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
        this.popularPlaces = allCities.slice(0, 6);
      }
    );
  }

}
