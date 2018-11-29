import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromAuth from '../user/auth/store/auth.reducers'
import * as fromBooking from '../booking/store/booking.reducer';
import * as fromTours from '../tour/store/tour.reducer';
import * as fromDestinations from '../main-page/store/destinations.reducer';

export interface AppState {
    auth: fromAuth.AuthState,
    booking: fromBooking.BookingState,
    tours: fromTours.ToursState
    destinations: fromDestinations.DestinationsState
}

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
    booking: fromBooking.bookingReducer,
    tours: fromTours.tourReducer,
    destinations: fromDestinations.destinationsReducer
}

export const selectAuth = (state: AppState) => state.auth;
export const selectBooking = (state: AppState) => state.booking;
export const selectTours = (state: AppState) => state.tours;
export const selectDestinations = (state: AppState) => state.destinations;

export const selectSimilarTours = createSelector(
    selectTours,
    selectDestinations,
    (tours: fromTours.ToursState, destinations: fromDestinations.DestinationsState) => {
        if (tours.hasLoaded && destinations.loadedDestination) {
            return destinations.toursByDestination;
        } else {
            if (!tours.hasLoaded) {
                this.store.dispatch(new TourActions.OnGetTourByID(id));
            }
            if (!destinations.loadedDestination) {
                this.store.dispatch(new DestinationsActions.OnGetTourByAddress(this.selectedTour.journey[0].city));
            }
        }
    }
)