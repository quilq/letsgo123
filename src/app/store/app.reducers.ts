import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromAuth from '../user/auth/store/auth.reducers'
import * as fromBooking from '../booking/store/booking.reducer';
import * as fromTours from '../tour/store/tour.reducer';

export interface AppState {
    auth: fromAuth.AuthState,
    booking: fromBooking.BookingState,
    tours: fromTours.ToursState
}

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
    booking: fromBooking.bookingReducer,
    tours: fromTours.tourReducer
}

export const selectTours = (state: AppState) => state.tours;

export const hasLoaded = createSelector(
    selectTours,
    (tours: fromTours.ToursState) => {
        return tours.hasLoaded
    }
)

export const allCities = createSelector(
    selectTours,
    (tours: fromTours.ToursState) => {
        let cities = [];

        tours.tours.forEach(element => {
            element.journey.forEach(place => {
                if (!cities.includes(place.city)) {
                    cities.push(place.city);
                }
            })
        });

        return cities;
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


