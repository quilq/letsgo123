import { Hotel } from '../../hotel/hotel.model';

export interface Booking {
    hotel: Hotel,
    dates: Date[]
}