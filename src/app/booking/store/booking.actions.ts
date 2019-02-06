import { Action } from '@ngrx/store';

import { Booking } from './../booking.model';

export const BOOK_TOUR = 'BOOK_TOUR';
export const REMOVE_TOUR = 'REMOVE_TOUR';
export const ON_UPDATE_BOOKING = 'ON_UPDATE_BOOKING';
export const UPDATE_BOOKING = 'UPDATE_BOOKING';

export class BookTour implements Action {
    readonly type = BOOK_TOUR;
    constructor (public payload: Booking){}
};

export class UpdateBooking implements Action {
    readonly type = UPDATE_BOOKING;
    constructor (public payload: Booking[]){}
};

export class OnUpdateBooking implements Action {
    readonly type = ON_UPDATE_BOOKING;
};

export class RemoveTour implements Action{
    readonly type = REMOVE_TOUR;
    constructor (public payload: number){}
};

export type Actions = BookTour | RemoveTour | OnUpdateBooking | UpdateBooking;