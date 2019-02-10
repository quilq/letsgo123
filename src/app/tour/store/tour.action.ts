import { Action } from '@ngrx/store';
import { Tour } from '../tour.model';

export const ON_GET_TOURS = 'ON_GET_TOURS';
export const GET_TOURS = 'GET_TOURS';
export const ON_GET_DISCOUNTED_TOURS = 'ON_GET_DISCOUNTED_TOURS';
export const GET_DISCOUNTED_TOURS = 'GET_DISCOUNTED_TOURS';
export const ON_GET_TOUR_BY_ID = 'ON_GET_TOURS_BY_ID';
export const GET_TOUR_BY_ID = 'GET_TOURS_BY_ID';
export const ON_GET_TOUR_BY_ADDRESS = 'ON_GET_TOUR_BY_ADDRESS';
export const GET_TOUR_BY_ADDRESS = 'GET_TOUR_BY_ADDRESS';
export const ADD_TOURS = 'ADD_TOURS';
export const UPDATE_TOURS_TO_SHOW = 'UPDATE_TOURS_TO_SHOW';

export class OnGetDiscountedTours implements Action {
    readonly type = ON_GET_DISCOUNTED_TOURS;
};

export class GetDiscountedTours implements Action {
    readonly type = GET_DISCOUNTED_TOURS;
    constructor(public payload: Tour[]) { }
};

export class OnGetTours implements Action {
    readonly type = ON_GET_TOURS;
    constructor(public payload?: { skip?: number, limit?: number }) { };
};

export class GetTours implements Action {
    readonly type = GET_TOURS;
    constructor(public payload: Tour[]) { }
};

export class OnGetTourByID implements Action {
    readonly type = ON_GET_TOUR_BY_ID;
    constructor(public payload: string) { };
};

export class GetTourByID implements Action {
    readonly type = GET_TOUR_BY_ID;
    constructor(public payload: Tour) { }
};

export class OnGetTourByAddress implements Action {
    readonly type = ON_GET_TOUR_BY_ADDRESS;
    constructor(public payload: string) { };
};

export class GetTourByAddress implements Action {
    readonly type = GET_TOUR_BY_ADDRESS;
    constructor(public payload: Tour[]) { }
};

export class AddTours implements Action {
    readonly type = ADD_TOURS;
    constructor(public payload: Tour[]) { }
}

export class UpdateToursToShow implements Action {
    readonly type = UPDATE_TOURS_TO_SHOW;
    constructor(public payload: Tour[]) { }
}

export type Actions = GetTours 
| OnGetTours 
| AddTours 
| UpdateToursToShow 
| OnGetTourByID 
| GetTourByID
| OnGetTourByAddress 
| GetTourByAddress
| OnGetDiscountedTours
| GetDiscountedTours;