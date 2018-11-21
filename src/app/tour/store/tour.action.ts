import { Action } from '@ngrx/store';
import { Tour } from '../tour.model';

export const ON_GET_TOURS = 'ON_GET_TOURS';
export const GET_TOURS = 'GET_TOURS';

export class OnGetTours implements Action {
    readonly type = ON_GET_TOURS;
    constructor(public payload?: {skip?: number, limit?: number}){};
};

export class GetTours implements Action {
    readonly type = GET_TOURS;
    constructor(public payload: Tour[]) { }
};


export type Actions = GetTours | OnGetTours;