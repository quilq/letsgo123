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
        case BookingActions.BOOK_TOUR: {
            let duplicate = false;
            for (let i = 0; i < state.booking.length; i++) {
                if (action.payload.tour._id === state.booking[i].tour._id) {
                    duplicate = true;
                    break;
                }
            }
            if (duplicate) {
                return state;
            } else {
                return { ...state, booking: [...state.booking, action.payload] };
            }
        }

        case BookingActions.REMOVE_TOUR: {
            //Use slice instead of splice
            let newBookings = [
                ...state.booking.slice(0, action.payload),
                ...state.booking.slice(action.payload + 1)
            ];
            return { ...state, booking: newBookings };
        }

        default: {
            return state;
        }
    }
}
