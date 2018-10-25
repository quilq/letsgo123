import { Booking } from '../booking.model';
import * as BookingActions from './booking.actions';

// const initialState: Booking = {
//     hotel: new Hotel(),
//     dates: [new Date]
// }

export interface BookingState {
    readonly booking: Booking[];
}

export function bookingReducer(state: Booking[] = [], action: BookingActions.Actions) {
    switch (action.type) {
        case BookingActions.BOOK_HOTEL:
            return [...state, action.payload];

        case BookingActions.REMOVE_HOTEL:
        //Use slice instead of splice
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];

        default:
            return state;
    }
}
