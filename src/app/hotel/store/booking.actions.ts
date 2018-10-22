import { Action } from '@ngrx/store';
import { Booking } from './booking.models';

export const BOOK_HOTEL = 'BOOK_HOTEL';
export const REMOVE_HOTEL = 'REMOVE_HOTEL';

export class BookHotel implements Action {
    readonly type = BOOK_HOTEL;
    constructor (public payload: Booking){}
};

export class RemoveHotel implements Action{
    readonly type = REMOVE_HOTEL;
    constructor (public payload: number){}
};

export type Actions = BookHotel | RemoveHotel;