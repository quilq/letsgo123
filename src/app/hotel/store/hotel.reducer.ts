import { Hotel } from '../hotel.model';
import * as HotelActions from './hotel.action';

export interface HotelsState {
    readonly hotels: Hotel[]
}

export function hotelReducer(state: Hotel[] = [], action: HotelActions.Actions) {
    switch (action.type) {
        case HotelActions.GET_HOTELS:
            let newHotels: Hotel[] = [],
                newHotelIDs: string[] = [];

            state.forEach(hotel => {
                newHotelIDs.push(hotel._id);
            });

            action.payload.forEach(hotel => {
                if (!newHotelIDs.includes(hotel._id)) {
                    newHotelIDs.push(hotel._id);
                    newHotels.push(hotel);
                }
            });
            return [...state, ...newHotels];

        default:
            return state;
    }
}