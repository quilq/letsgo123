import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../user/auth/store/auth.reducers'
import * as fromBooking from '../booking/store/booking.reducer';
import * as fromTours from '../tour/store/tour.reducer';

export interface AppState {
    auth: fromAuth.AuthState,
    booking: fromBooking.BookingState,
    tours: fromTours.ToursState
}

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
    booking: fromBooking.bookingReducer,
    tours: fromTours.tourReducer
}