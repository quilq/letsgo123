import { Tour } from '../tour.model';
import * as TourActions from './tour.action';

export interface ToursState {
    tours: Tour[]
}

const initialState: ToursState = {
    tours: []
}

export function tourReducer(state: ToursState = initialState, action: TourActions.Actions) : ToursState {
    switch (action.type) {
        case TourActions.GET_TOURS:
            // let newTours: Tour[] = [],
            //     newTourIDs: string[] = [];

            // state.tours.forEach(tour => {
            //     newTourIDs.push(tour._id);
            // });

            // action.payload.forEach(tour => {
            //     if (!newTourIDs.includes(tour._id)) {
            //         newTourIDs.push(tour._id);
            //         newTours.push(tour);
            //     }
            // });
            // return {...state, ...newTours};
            return {...state, tours: [...state.tours, ...action.payload]}

        default:
            return state;
    }
}