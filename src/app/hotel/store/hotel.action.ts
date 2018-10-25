import { Action } from '@ngrx/store';
import { Hotel } from '../hotel.model';

export const ON_GET_HOTELS = 'ON_GET_HOTELS';
export const GET_HOTELS = 'GET_HOTELS';

export class OnGetHotels implements Action {
    readonly type = ON_GET_HOTELS;
    constructor(public payload?: {skip?: number, limit?: number}){};
};

export class GetHotels implements Action {
    readonly type = GET_HOTELS;
    constructor(public payload: Hotel[]) { }
};

export type Actions = GetHotels | OnGetHotels;