import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, map, tap } from "rxjs/operators";

import { TourService } from "src/app/tour/tour.service";
import * as DestinationsAction from './destinations.action'

Injectable()
export class DestinationsEffect {
    @Effect()
    getDestinations$: Observable<Action> = this.action$.pipe(
        ofType(DestinationsAction.ON_GET_DESTINATIONS),
        tap(()=>console.log('test ...')),
        switchMap(() => {
            tap(()=> console.log('switchmap called'));
            return this.tourService.getPopularPlaces().pipe(
                tap(()=> console.log('destionations effect')),
                map((places: string[]) => new DestinationsAction.GetDestinations(places))
            )
        })
    )

    constructor(private action$: Actions, private tourService: TourService) { }
}