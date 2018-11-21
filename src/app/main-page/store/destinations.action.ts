import { Action } from '@ngrx/store';
import { Tour } from 'src/app/tour/tour.model';

export const ON_GET_DESTINATIONS = 'ON_GET_DESTINATIONS';
export const GET_DESTINATIONS = 'GET_DESTINATIONS';
export const ON_GET_TOUR_BY_ADDRESS = 'ON_GET_TOUR_BY_ADDRESS';
export const GET_TOUR_BY_ADDRESS = 'GET_TOUR_BY_ADDRESS';

export class OnGetTourByAddress implements Action {
    readonly type = ON_GET_TOUR_BY_ADDRESS;
    constructor(public payload: string){}
}

export class GetTourByAddress implements Action {
    readonly type = GET_TOUR_BY_ADDRESS;
    constructor(public payload: Tour[]) { }

}
export class OnGetDestinations implements Action {
    readonly type = ON_GET_DESTINATIONS;
    constructor(){}
}

export class GetDestinations implements Action {
    readonly type = GET_DESTINATIONS;
    constructor(public payload: string[]) { }
}

export type Action = OnGetDestinations | GetDestinations | OnGetTourByAddress | GetTourByAddress;