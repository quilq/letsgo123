import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { PopularPlacesService } from '../popular-places.service';
import * as PopularPlacesActions from './popular-places.action';

@Injectable()
export class PopularPlacesEffects {
    @Effect()
    getPopularPlaces$: Observable<Action> = this.actions$.pipe(
        ofType(PopularPlacesActions.ON_GET_POPULAR_PLACES),
        switchMap(() => {
            return this.popularPlacesService.getPopularPlaces()
                .pipe(
                    map((places: string[]) => new PopularPlacesActions.GetPopularPlaces(places))
                )
        })
    );

    @Effect()
    getDeparturePlaces$: Observable<Action> = this.actions$.pipe(
        ofType(PopularPlacesActions.ON_GET_DEPARTURE_PLACES),
        switchMap(() => {
            return this.popularPlacesService.getDeparturePlaces()
                .pipe(
                    map((places: string[]) => new PopularPlacesActions.GetDeparturePlaces(places))
                )
        })
    );

    @Effect()
    getDestinations$: Observable<Action> = this.actions$.pipe(
        ofType(PopularPlacesActions.ON_GET_DESTINATIONS),
        switchMap(() => {
            return this.popularPlacesService.getDestinations()
                .pipe(
                    map((places: string[]) => new PopularPlacesActions.GetDestinations(places))
                )
        })
    );

    constructor(private actions$: Actions,
        private popularPlacesService: PopularPlacesService) { }
}
