import { Tour } from '../tour.model';
import * as TourActions from './tour.action';

export interface ToursState {
    hasLoaded: boolean,
    tours: Tour[],
    toursToShow: Tour[],
    selectedTour: Tour
}

const initialState: ToursState = {
    hasLoaded: false,
    tours: [],
    toursToShow: [],
    selectedTour: new Tour()
}

export function tourReducer(state: ToursState = initialState, action: TourActions.Actions): ToursState {
    switch (action.type) {
        case TourActions.GET_TOURS:
            return { ...state, tours: [...state.tours, ...action.payload], hasLoaded: true };

        // case TourActions.ADD_TOURS:
        //     let tours = [...state.tours, ...action.payload];

        //     // Copy tours array => result Object with tour id as 'Key'
        //     // 'Key' are unique => get rid of duplicates
        //     let toursCopy = {};
        //     for (let i = 0, n = tours.length; i < n; i++) {
        //         let item = tours[i];
        //         toursCopy[item._id] = item;
        //     }
        //     let i = 0;
        //     let nonDuplicateTours = [];
        //     for (const item in toursCopy) {
        //         nonDuplicateTours[i++] = toursCopy[item];
        //     }
        //     return { ...state, tours: nonDuplicateTours, hasLoaded: true };

        // case TourActions.GET_TOUR_BY_ID:
        //     return { ...state, tours: [...state.tours, action.payload], hasLoaded: true }

        case TourActions.GET_TOUR_BY_ID:
            return { ...state, selectedTour: action.payload, hasLoaded: true };

        case TourActions.GET_TOUR_BY_ADDRESS:
        case TourActions.GET_DISCOUNTED_TOURS:
            return { ...state, toursToShow: action.payload, hasLoaded: true };

        case TourActions.UPDATE_TOURS_TO_SHOW:
            return { ...state, toursToShow: [...action.payload], hasLoaded: true };

        default:
            return state;
    }
}