import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as HotelActions from './hotel.action';
import { map, switchMap, tap } from 'rxjs/operators';
import { Hotel } from '../hotel.model';
import { HotelService } from '../hotel.service';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class HotelEffects {
    @Effect()
    getHotel$: Observable<Action> = this.actions$.pipe(
        ofType(HotelActions.ON_GET_HOTELS),
        switchMap((action: HotelActions.OnGetHotels) => {
            if (action.payload) {
                return this.hotelService.findHotels(action.payload.skip, action.payload.limit)
                    .pipe(
                        map((hotels: Hotel[]) => new HotelActions.GetHotels(hotels))
                    )
            } else {
                return this.hotelService.findHotels()
                    .pipe(
                        map((hotels: Hotel[]) => new HotelActions.GetHotels(hotels))
                    )
            }
        })
    );

    constructor(private actions$: Actions,
        private hotelService: HotelService) { }
}
