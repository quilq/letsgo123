import * as PopularPlacesActions from './popular-places.action';

export interface PopularPlacesState {
    hasLoaded: boolean,
    popularPlaces: string[],
    departurePlaces: string[],
    destinations: string[]
}

const initialState: PopularPlacesState = {
    hasLoaded: false,
    popularPlaces: [],
    departurePlaces: [],
    destinations: []
}

export function popularPlacesReducer(state: PopularPlacesState = initialState, action: PopularPlacesActions.Actions): PopularPlacesState {
    switch (action.type) {
        case PopularPlacesActions.GET_POPULAR_PLACES:
            return { ...state, popularPlaces: action.payload, hasLoaded: true };

        case PopularPlacesActions.GET_DEPARTURE_PLACES:
            return { ...state, departurePlaces: action.payload };

        case PopularPlacesActions.GET_DESTINATIONS:
            return { ...state, destinations: action.payload };

        default:
            return state;
    }
}