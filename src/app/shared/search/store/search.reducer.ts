//UPDATE SEARCH STATE

import { Tour } from '../../../tour/tour.model';
import * as SearchActions from './search.action';

export interface SearchState {
}

const initialState: SearchState = {
}

export function tourReducer(state: SearchState = initialState, action: SearchActions.Actions): SearchState {
    switch (action.type) {
        case SearchActions.SEARCH_TOUR_BY_ADDRESS_AND_DATE:
            return {...action.payload };

        default:
            return state;
    }
}