import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromAuth from '../user/auth/store/auth.reducers'
import * as fromBooking from '../booking/store/booking.reducer';
import * as fromTours from '../tour/store/tour.reducer';
import * as fromPopularPlaces from '../core/popular-places/store/popular-places.reducer';

export interface AppState {
    auth: fromAuth.AuthState,
    booking: fromBooking.BookingState,
    tours: fromTours.ToursState,
    popularPlaces: fromPopularPlaces.PopularPlacesState
}

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
    booking: fromBooking.bookingReducer,
    tours: fromTours.tourReducer,
    popularPlaces: fromPopularPlaces.popularPlacesReducer
}

export const selectTours = (state: AppState) => state.tours;
export const selectPopularPlaces = (state: AppState) => state.popularPlaces;

export const toursLoaded = createSelector(
    selectTours,
    (tours: fromTours.ToursState) => {
        return tours.hasLoaded
    }
)

export const allTours = createSelector(
    selectTours,
    (tours: fromTours.ToursState) => {
        return tours.tours;
    }
)

export const toursToShow = createSelector(
    selectTours,
    (tours: fromTours.ToursState) => {
        return tours.toursToShow;
    }
)

export const selectedTour = createSelector(
    selectTours,
    (tours: fromTours.ToursState) => {
        return tours.selectedTour;
    }
)

export const popularPlaces = createSelector(
    selectPopularPlaces,
    (places: fromPopularPlaces.PopularPlacesState) => {
        return places.popularPlaces;
    }
)

export const departurePlaces = createSelector(
    selectPopularPlaces,
    (places: fromPopularPlaces.PopularPlacesState) => {
        return places.departurePlaces;
    }
)

export const destinations = createSelector(
    selectPopularPlaces,
    (places: fromPopularPlaces.PopularPlacesState) => {
        return places.destinations;
    }
)


