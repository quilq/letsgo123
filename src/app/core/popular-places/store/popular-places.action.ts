import { Action } from "@ngrx/store";

export const ON_GET_POPULAR_PLACES = 'ON_GET_POPULAR_PLACES';
export const GET_POPULAR_PLACES = 'GET_POPULAR_PLACES';

export class OnGetPopularPlaces implements Action {
    readonly type = ON_GET_POPULAR_PLACES;
};

export class GetPopularPlaces implements Action {
    readonly type = GET_POPULAR_PLACES;
    constructor(public payload: string[]) { }
};

export type Actions = GetPopularPlaces | OnGetPopularPlaces;