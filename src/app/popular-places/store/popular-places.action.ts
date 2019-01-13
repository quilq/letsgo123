import { Action } from "@ngrx/store";

export const ON_GET_POPULAR_PLACES = 'ON_GET_POPULAR_PLACES';
export const GET_POPULAR_PLACES = 'GET_POPULAR_PLACES';

export const ON_GET_DEPARTURE_PLACES = 'ON_GET_DEPARTURE_PLACES';
export const GET_DEPARTURE_PLACES = 'GET_DEPARTURE_PLACES';

export const ON_GET_DESTINATIONS = 'ON_GET_DESTINATIONS';
export const GET_DESTINATIONS = 'GET_DESTINATIONS';

export class OnGetPopularPlaces implements Action {
    readonly type = ON_GET_POPULAR_PLACES;
};

export class GetPopularPlaces implements Action {
    readonly type = GET_POPULAR_PLACES;
    constructor(public payload: string[]) { }
};

export class OnGetDeparturePlaces implements Action {
    readonly type = ON_GET_DEPARTURE_PLACES;
};

export class GetDeparturePlaces implements Action {
    readonly type = GET_DEPARTURE_PLACES;
    constructor(public payload: string[]) { }
};

export class OnGetDestinations implements Action {
    readonly type = ON_GET_DESTINATIONS;
};

export class GetDestinations implements Action {
    readonly type = GET_DESTINATIONS;
    constructor(public payload: string[]) { }
};
export type Actions = OnGetPopularPlaces
    | GetPopularPlaces
    | OnGetDeparturePlaces
    | GetDeparturePlaces
    | OnGetDestinations
    | GetDestinations;