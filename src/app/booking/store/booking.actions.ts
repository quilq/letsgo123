import { Action } from '@ngrx/store';

import { Booking } from './../booking.model';

export const BOOK_TOUR = 'BOOK_TOUR';
export const REMOVE_TOUR = 'REMOVE_TOUR';

export class BookTour implements Action {
    readonly type = BOOK_TOUR;
    constructor (public payload: Booking){}
};

export class RemoveTour implements Action{
    readonly type = REMOVE_TOUR;
    constructor (public payload: number){}
};

export type Actions = BookTour | RemoveTour;