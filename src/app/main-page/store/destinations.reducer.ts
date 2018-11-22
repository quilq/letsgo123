import * as DestinationsAction from './destinations.action';
import { Tour } from '../../tour/tour.model';

export interface DestinationsState {
    destinations: string[],
    loadedDestination: string,
    toursByDestination: Tour[]
}

const initialState: DestinationsState = {
    destinations: [],
    loadedDestination: '',
    toursByDestination: []
}

export function destinationsReducer(state: DestinationsState = initialState, action: DestinationsAction.Action): DestinationsState {
    switch (action.type) {
        case DestinationsAction.GET_DESTINATIONS:
            return {...state, destinations: [...state.destinations, ...action.payload]}

            case DestinationsAction.GET_TOUR_BY_ADDRESS:
            return {...state, loadedDestination: action.payload.address, toursByDestination: [...action.payload.tours]}

        default:
            return state;
    }
}