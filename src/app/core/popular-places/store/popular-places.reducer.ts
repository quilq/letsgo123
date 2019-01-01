import * as PopularPlacesActions from './popular-places.action';

export interface PopularPlacesState {
    hasLoaded: boolean,
    PopularPlaces: string[]
}

const initialState: PopularPlacesState = {
    hasLoaded: false,
    PopularPlaces: []
}

export function popularPlacesReducer(state: PopularPlacesState = initialState, action: PopularPlacesActions.Actions): PopularPlacesState {
    switch (action.type) {
        case PopularPlacesActions.GET_POPULAR_PLACES:
            return { PopularPlaces: action.payload, hasLoaded: true };

        default:
            return state;
    }
}