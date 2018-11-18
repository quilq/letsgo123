import { Tour } from '../tour.model';
import * as TourActions from './tour.action';

export interface ToursState {
    hasLoaded: boolean,
    tours: Tour[]
}

const initialState: ToursState = {
    hasLoaded: false,
    tours: []
}

export function tourReducer(state: ToursState = initialState, action: TourActions.Actions): ToursState {
    switch (action.type) {
        case TourActions.GET_TOURS:
            return { ...state, tours: [...state.tours, ...action.payload], hasLoaded: true };

        default:
            return state;
    }
}