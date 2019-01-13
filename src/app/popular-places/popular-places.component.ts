import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, popularPlaces} from '../store/app.reducers';
import * as PopularPlacesAction from './store/popular-places.action';

@Component({
  selector: 'app-popular-places',
  templateUrl: './popular-places.component.html',
  styleUrls: ['./popular-places.component.css']
})
export class PopularPlacesComponent implements OnInit {

  popularPlaces: string[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('popularPlaces').subscribe(
      popularPlaces => {
        if (!popularPlaces.hasLoaded) {
          this.store.dispatch(new PopularPlacesAction.OnGetPopularPlaces());
        }
      }
    )

    this.store.select(popularPlaces).subscribe(
      places => {
        this.popularPlaces = places.slice(0, 6);
      }
    );
  }

  

}
