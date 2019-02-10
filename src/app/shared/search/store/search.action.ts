import { Action } from '@ngrx/store';
import { Tour } from '../../../tour/tour.model';

export const ON_SEARCH_TOUR_BY_ADDRESS_AND_DATE = 'ON_SEARCH_TOUR_BY_ADDRESS_AND_DATE';
export const SEARCH_TOUR_BY_ADDRESS_AND_DATE = 'SEARCH_TOUR_BY_ADDRESS_AND_DATE';

export class OnSearchTourByAddressAndDate implements Action {
    readonly type = ON_SEARCH_TOUR_BY_ADDRESS_AND_DATE;
    constructor(public payload: {from: string, to: string, date: Date}) { };
};

export class SearchTourByAddressAndDate implements Action {
    readonly type = SEARCH_TOUR_BY_ADDRESS_AND_DATE;
    constructor(public payload: Tour[]) { }
};

export type Actions = OnSearchTourByAddressAndDate
| SearchTourByAddressAndDate ;