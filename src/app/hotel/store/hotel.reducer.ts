import { Hotel } from '../hotel.model';
import * as HotelActions from './hotel.action';

export interface HotelsState {
    readonly hotels: Hotel[]
}

export function hotelReducer(state: Hotel[] = [], action: HotelActions.Actions) {
    switch (action.type) {
        case HotelActions.GET_HOTELS:
            return [...state, action.payload];

        default:
            return state;
    }
}