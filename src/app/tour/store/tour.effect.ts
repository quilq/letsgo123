import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as TourActions from './tour.action';
import { map, switchMap, tap } from 'rxjs/operators';
import { Tour } from '../tour.model';
import { TourService } from '../tour.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

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

    constructor(private actions$: Actions,
        private tourService: TourService) { }
}
