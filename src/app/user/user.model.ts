import { Booking } from "../booking/booking.model";

export class User {
    username: string;
    email: string;
    bookingsHistory?: Booking[];
    currentBookings?: Booking[];

    constructor(username: string = '', email: string =''){
        this.username = username;
        this.email = email;
    }
}