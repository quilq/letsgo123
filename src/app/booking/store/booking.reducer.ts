import { Booking } from '../booking.model';
import * as BookingActions from './booking.actions';

export interface BookingState {
    booking: Booking[];
}

const initialState: BookingState = {
    booking: []
}

export function bookingReducer(state: BookingState = initialState, action: BookingActions.Actions): BookingState {
    switch (action.type) {
        case BookingActions.BOOK_HOTEL: {
            return { ...state, booking: [...state.booking, action.payload] };
        }

        case BookingActions.REMOVE_HOTEL: {
            //Use slice instead of splice
            let newBookings = [
                ...state.booking.slice(0, action.payload),
                ...state.booking.slice(action.payload + 1)
            ];
            return {
                ...state, booking: newBookings
            };
        }
        
        default: {
            return state;
        }
    }
}
