import { Tour } from '../tour/tour.model';

export interface Booking {
    tour: Tour,
    dates: Date[]
}