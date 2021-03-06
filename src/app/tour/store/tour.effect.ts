import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { TourService } from '../tour.service';
import { Tour } from '../tour.model';
import * as TourActions from './tour.action';

@Injectable()
export class TourEffects {
    @Effect()
    getTour$: Observable<Action> = this.actions$.pipe(
        ofType(TourActions.ON_GET_TOURS),
        switchMap((action: TourActions.OnGetTours) => {
            if (action.payload) {
                return this.tourService.findTours(action.payload.skip, action.payload.limit)
                    .pipe(
                        map((tours: Tour[]) => {
                            if (tours.length > 0){
                                return new TourActions.GetTours(tours)
                            }
                        })
                    )
            } else {
                return this.tourService.findTours()
                    .pipe(
                        map((tours: Tour[]) => new TourActions.GetTours(tours))
                    )
            }
        })
    );

    @Effect()
    getTourByID$: Observable<Action> = this.actions$.pipe(
        ofType(TourActions.ON_GET_TOUR_BY_ID),
        switchMap((action: TourActions.OnGetTourByID) => this.tourService.findTourByID(action.payload).pipe(
            map((tour: Tour) => new TourActions.GetTourByID(tour))
        )
        )
    )

    @Effect()
    getTourByAddress$: Observable<Action> = this.actions$.pipe(
        ofType(TourActions.ON_GET_TOUR_BY_ADDRESS),
        switchMap((action: TourActions.OnGetTourByAddress) => this.tourService.findTourByAddress(action.payload).pipe(
            map((tour: Tour[]) => new TourActions.GetTourByAddress(tour))
        ))
    )

    @Effect()
    getDiscountedTour$: Observable<Action> = this.actions$.pipe(
        ofType(TourActions.ON_GET_DISCOUNTED_TOURS),
        switchMap(() => this.tourService.findDiscountedTours().pipe(
            map((tour: Tour[]) => new TourActions.GetDiscountedTours(tour))
        )
        )
    )

    constructor(private actions$: Actions,
        private tourService: TourService) { }
}
