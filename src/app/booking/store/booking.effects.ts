import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';

import * as BookingActions from './booking.actions';
import { BookingService } from '../booking.service';
import { Booking } from '../booking.model';

@Injectable()

export class AuthEffects {
    @Effect()
    onUpdateBooking$: Observable<Action> = this.action$.pipe(
        ofType(BookingActions.ON_UPDATE_BOOKING),
        switchMap((action: BookingActions.UpdateBooking) => {
            return this.bookingService.updateBookings(action.payload)
                .pipe(
                    map((bookings: Booking[]) => {
                            return new BookingActions.UpdateBooking(bookings);
                    })
                )
        })
    )

    constructor(private action$: Actions,
        private bookingService: BookingService) { }
}