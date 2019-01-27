import { Tour } from "../tour/tour.model";

export class User {
    username: string;
    email: string;
    bookingsHistory?: Tour[];
    currentBookings?: Tour[];

    constructor(username: string = '', email: string =''){
        this.username = username;
        this.email = email;
    }
}