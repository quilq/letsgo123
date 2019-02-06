import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  updateBookings(bookings: Booking[]){
    let url = '/user-booking';
    return this.httpClient.patch(url, bookings);
  }
}
