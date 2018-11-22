import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import * as DestinationsAction from './destinations.action'
import { switchMap, map, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";

import { TourService } from "../../tour/tour.service";
import { Tour } from "src/app/tour/tour.model";


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

    @Effect()
    getTourByAddress$: Observable<Action> = this.action$.pipe(
        ofType(DestinationsAction.ON_GET_TOUR_BY_ADDRESS),
        switchMap((action: DestinationsAction.OnGetTourByAddress)=>{
            return this.tourService.findTourByAddress(action.payload).pipe(
                map((tours: Tour[]) => new DestinationsAction.GetTourByAddress({address: action.payload, tours: tours}))
            )
        })
    )

    constructor(private action$: Actions,
        private tourService: TourService) { }
}