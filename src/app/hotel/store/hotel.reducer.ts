import { Hotel } from '../hotel.model';
import * as HotelActions from './hotel.action';

export interface HotelsState {
    hotels: Hotel[]
}

const initialState: HotelsState = {
    hotels: []
}

export function hotelReducer(state: HotelsState = initialState, action: HotelActions.Actions) : HotelsState {
    switch (action.type) {
        case HotelActions.GET_HOTELS:
            // let newHotels: Hotel[] = [],
            //     newHotelIDs: string[] = [];

            // state.hotels.forEach(hotel => {
            //     newHotelIDs.push(hotel._id);
            // });

            // action.payload.forEach(hotel => {
            //     if (!newHotelIDs.includes(hotel._id)) {
            //         newHotelIDs.push(hotel._id);
            //         newHotels.push(hotel);
            //     }
            // });
            // return {...state, ...newHotels};
            return {...state, hotels: [...state.hotels, ...action.payload]}

        default:
            return state;
    }
}