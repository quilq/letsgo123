import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as TourActions from './tour.action';
import { switchMap, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { TourService } from '../tour.service';
import { Tour } from '../tour.model';

@Injectable()
export class TourEffects {
    @Effect()
    getTour$: Observable<Action> = this.actions$.pipe(
        ofType(TourActions.ON_GET_TOURS),
        switchMap((action: TourActions.OnGetTours) => {
            if (action.payload) {
                return this.tourService.findTours(action.payload.skip, action.payload.limit)
                    .pipe(
                        map((tours: Tour[]) => new TourActions.GetTours(tours))
                    )
            } else {
                return this.tourService.findTours()
                    .pipe(
                        map((tours: Tour[]) => new TourActions.GetTours(tours))
                    )
            }
        })
    );

    // @Effect()
    // getTourByID$: Observable<Action> = this.actions$.pipe(
    //     ofType(TourActions.ON_GET_TOUR_BY_ID),
    //     switchMap((action: TourActions.OnGetTourByID) => this.tourService.findTourByID(action.payload)
    //         .pipe(
    //             map((tour: Tour) => new TourActions.GetTourByID(tour))
    //         )
    //     )
    // )

    constructor(private actions$: Actions,
        private tourService: TourService) { }
}
