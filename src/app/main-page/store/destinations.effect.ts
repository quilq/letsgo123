import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import * as DestinationsAction from './destinations.action'
import { switchMap, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";

import { TourService } from "../../tour/tour.service";


@Injectable()
export class DestinationsEffect {
    @Effect()
    getDestinations$: Observable<Action> = this.action$.pipe(
        ofType(DestinationsAction.ON_GET_DESTINATIONS),
        switchMap(() => {
            return this.tourService.getPopularPlaces().pipe(
                map((places: string[]) => new DestinationsAction.GetDestinations(places))
            )
        })
    );

    constructor(private action$: Actions,
        private tourService: TourService) { }
}